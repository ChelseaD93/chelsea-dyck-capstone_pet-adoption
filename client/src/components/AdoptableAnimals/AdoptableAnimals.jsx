import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from "axios";
import AdoptableCats from '../AdoptableCats/AdoptableCats';
import AdoptableCritters from '../AdoptableCritters/AdoptableCritters';
import AdoptableDogs from '../AdoptableDogs/AdoptableDogs';

class AdoptableAnimals extends React.Component {

    state = {
        authToken: '',
        animals: []
    }

    componentDidMount() {
        axios.get('/animals')
            .then((res) => {
                this.setState({animals: res.data})
                console.log(res.data)
            })

    //information for API access through PetFinder.com
    //     const API_KEY = 'Ab8xQ5x4ko6Ue4EfS12b2T4jmijVdGltbWXPJ8zLreFMbC9Lo1';
    //     const SECRET_KEY = 'vswXi2YoIUPufT0BrJCtRXoXKkJI8gEn16QehuXn';

    //     axios
    //         .post('https://api.petfinder.com/v2/oauth2/token',
    //             {
    //                 grant_type:'client_credentials',
    //                 client_id: API_KEY,
    //                 client_secret: SECRET_KEY
    //             }
    //         )
    //         .then((res) => {
    //             this.setState({authToken: res.data.access_token})
    //         })
    }
    //componentDidUpdate -- refreshing timed axios to keep up with token timeouts
    // componentDidUpdate() {
    //     axios
    //         .get('https://api.petfinder.com/v2/animals?limit=20', { 
    //             headers: {
    //                 Authorization: `Bearer ${this.state.authToken}`
    //             }
    //         })
    //         .then((res) => {
    //             this.setState({animals: res.data.animals})
    //         })
    // }


    render() {
        if (!this.state.animals.length) {
            return (
              <div className="animals__loading">
                <h2>Loading...</h2>
              </div>
            );
          }
        return (
        <div className="animals">
            <div className="animals__hero">
                <h1 className="animals__hero-title">Available Animals</h1>
            </div>
            <div className="animals__main">
                <div className="animals__main-login">
                    <p className="animals__main-login-description">As you may have discovered, searching for a pet to adopt can be easy. But actually getting one can be tough! With the high number of families looking to adopt a new pet, there is a lot of competition to get  your name in first.</p>
                    <Link to="/adoptable-animals/cats" className="animals__main-login-link">
                        <button className="animals__main-login-link-button">Sign Up Today</button>
                    </Link>
                    <Link to="/adoptable-animals/dogs" className="animals__main-login-link">
                        <button className="animals__main-login-link-button">Sign Up Today</button>
                    </Link>
                    <Link to="/adoptable-animals/critters" className="animals__main-login-link">
                        <button className="animals__main-login-link-button">Sign Up Today</button>
                    </Link>
                </div>
                <div className="animals__available">
                    {
                        this.state.animals.map(animal => {
                            return(
                                <div key={animal.id} className="animals__available-card">
                                    <img src={animal.photo} alt="" className="animals__available-card-image"/>
                                    <div className="animals__available-card-content">
                                        <h3 className="animals__available-card-content-name">{animal.name}</h3>
                                        <p className="animals__available-card-content-type">{animal.type}</p>
                                        <p className="animals__available-card-content-size">{animal.size}</p>
                                        <p className="animals__available-card-content-age">{animal.age}</p>
                                    </div>
                                </div>
                            )  
                        }) 
                    }
                </div>
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