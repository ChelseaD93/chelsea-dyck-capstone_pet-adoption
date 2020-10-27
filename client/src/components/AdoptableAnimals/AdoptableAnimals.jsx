import React from 'react';
import axios from "axios";
import './adoptableAnimals.scss'

class AdoptableAnimals extends React.Component {

    state = {
        selectedAnimal: '',
        animals: []
    }

    componentDidMount() {
        axios.get('/animals')
            .then((res) => {
                this.setState({animals: res.data})
            })
    }

    //function that filters contents of page based on button clicks
    animalFilter = (animalChoice) => {
 
        if (animalChoice === 'cat'){
            const filteredAnimals = this.state.animals.filter(animal => animal.type.toLowerCase() === 'cat')
            this.setState({selectedAnimal: filteredAnimals})
        } else if (animalChoice === 'dog'){
            const filteredAnimals = this.state.animals.filter(animal => animal.type.toLowerCase() ==='dog')
            this.setState({selectedAnimal: filteredAnimals})
        } else if (animalChoice === 'critter'){
            const filteredAnimals = this.state.animals.filter(animal => animal.type.toLowerCase() !=='dog' && animal.type.toLowerCase() !=='cat')
            this.setState({selectedAnimal: filteredAnimals})
        } else {
            this.setState({selectedAnimal: '' })
        }
    }


    render() {       
        
        const animalMap = this.state.selectedAnimal.length ? this.state.selectedAnimal : this.state.animals;

        return (
        <div className="animals">
            <div className="animals__hero">
                <h1 className="animals__hero-title">Available Animals</h1>
            </div>
            <h2 className="animals__intro">Looking for a specific animal? Choose from one of our options below:</h2>
            <div className="animals__nav">
                <button value='all' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-button">All</button>
                <button value='cat' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-button">Cats</button>
                <button value='dog' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-button">Dogs</button>
                <button value='critter' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-button">Critters</button>
            </div>
            <div className="animals__available">
                {!this.state.animals.length ? 
                    (
                    <div className="animals__available-loading">
                        <h2>Loading...</h2>
                    </div>
                    ):( animalMap && 
                        animalMap.map(animal => {
                            return(
                                <div key={animal.id} className="animals__available-card">
                                    <img src={animal.photo} alt={animal.type} className="animals__available-card-image"/>
                                    <h3 className="animals__available-card-name">{animal.name}</h3>
                                    <div className="animals__available-card-content">
                                        <p className="animals__available-card-content-info">Type: {animal.type}</p>
                                        <p className="animals__available-card-content-info">Size: {animal.size}</p>
                                        <p className="animals__available-card-content-info">Age: {animal.age}</p>
                                    </div>
                                    <a href={animal.link} className="animals__available-card-link">
                                        <button className="animals__available-card-link-button">Learn More</button>
                                    </a>
                                </div>
                            )  
                        }) 
                    )}
            </div>            
        </div>
        );
    }
}

export default AdoptableAnimals;