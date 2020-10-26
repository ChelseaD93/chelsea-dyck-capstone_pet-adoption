import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from "axios";
import AdoptableCats from '../AdoptableCats/AdoptableCats';
import AdoptableCritters from '../AdoptableCritters/AdoptableCritters';
import AdoptableDogs from '../AdoptableDogs/AdoptableDogs';
import './adoptableAnimals.scss'

class AdoptableAnimals extends React.Component {

    state = {
        authToken: '',
        animals: []
    }

    componentDidMount() {
        // axios.get('/animals')
        //     .then((res) => {
        //         this.setState({animals: res.data})
        //         console.log(res.data)
        //     })

    //information for API access through PetFinder.com
        const API_KEY = 'Ab8xQ5x4ko6Ue4EfS12b2T4jmijVdGltbWXPJ8zLreFMbC9Lo1';
        const SECRET_KEY = 'vswXi2YoIUPufT0BrJCtRXoXKkJI8gEn16QehuXn';

        axios
            .post('https://api.petfinder.com/v2/oauth2/token',
                {
                    grant_type:'client_credentials',
                    client_id: API_KEY,
                    client_secret: SECRET_KEY
                }
            )
            .then((res) => {
                this.setState({authToken: res.data.access_token})
            })
    }
    //componentDidUpdate -- refreshing timed axios to keep up with token timeouts
    componentDidUpdate() {
        if (!this.state.animals.length) {
            axios
            .get('https://api.petfinder.com/v2/animals?limit=10', { 
                headers: {
                    Authorization: `Bearer ${this.state.authToken}`
                }
            })
            .then((res) => {
                this.setState({animals: res.data.animals})
            })
        }     
    }


    render() {       
        
        return (
        <div className="animals">
            <div className="animals__hero">
                <h1 className="animals__hero-title">Available Animals</h1>
            </div>
            <h2 className="animals__intro">Looking for a specific animal? Choose from one of our options below:</h2>
            <div className="animals__nav">
                <Link to="/adoptable-animals/cats" className="animals__nav-link">
                    <button className="animals__nav-link-button">Cats</button>
                </Link>
                <Link to="/adoptable-animals/dogs" className="animals__nav-link">
                    <button className="animals__nav-link-button">Dogs</button>
                </Link>
                <Link to="/adoptable-animals/critters" className="animals__nav-link">
                    <button className="animals__nav-link-button">Critters</button>
                </Link>
            </div>
            <div className="animals__available">
                {!this.state.animals.length ? 
                    (
                    <div className="animals__available-loading">
                        <h2>Loading...</h2>
                    </div>
                    ):(
                        this.state.animals.map(animal => {
                            return(
                                <div key={animal.id} className="animals__available-card">
                                    <img src={animal.photo} alt={animal.type} className="animals__available-card-image"/>
                                    <h3 className="animals__available-card-name">{animal.name}</h3>
                                    <div className="animals__available-card-content">
                                        <p className="animals__available-card-content-info">Type: {animal.type}</p>
                                        <p className="animals__available-card-content-info">Size: {animal.size}</p>
                                        <p className="animals__available-card-content-info">Age: {animal.age}</p>
                                    </div>
                                    <a href={animal.url} className="animals__available-card-link">
                                        <button className="animals__available-card-link-button">Learn More</button>
                                    </a>
                                </div>
                            )  
                        }) 
                    )}
            </div>
            <Switch>
                <Route path='/adoptable-animals/cats' exact render={(routeProps) => <AdoptableCats {...routeProps} />} />
                <Route path='/adoptable-animals/dogs' exact render={(routeProps) => <AdoptableDogs {...routeProps} />} />
                <Route path='/adoptable-animals/critters' exact render={(routeProps) => <AdoptableCritters {...routeProps} />} />
            </Switch>            
        </div>
        );
    }
}

export default AdoptableAnimals;