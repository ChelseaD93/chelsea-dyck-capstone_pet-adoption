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
                console.log(res.data)
            })
    }

    //function that filters contents of page based on button clicks
    animalFilter = (animalChoice) => {

        if (animalChoice === 'Cat'){
            const filteredAnimals = this.state.animals.filter(animal => animal.type.toUpperCase() === 'Cat')
            this.setState({selectedAnimal: filteredAnimals})
        } else if (animalChoice === 'Dog'){
            const filteredAnimals = this.state.animals.filter(animal => animal.type.toUpperCase() === 'Dog')
            this.setState({selectedAnimal: filteredAnimals})
        } else if (animalChoice === 'Critter'){
            const filteredAnimals = this.state.animals.filter(animal => animal.type.toUpperCase() !== 'Dog' && animal.type.toUpperCase() !=='Cat')
            this.setState({selectedAnimal: filteredAnimals})
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
                    <button value='Cat' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-link-button">Cats</button>
                    <button value='Dog' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-link-button">Dogs</button>
                    <button value='Critter' onClick={(e) => this.animalFilter(e.target.value)} className="animals__nav-link-button">Critters</button>
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
                                    <a href={animal.url} className="animals__available-card-link">
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