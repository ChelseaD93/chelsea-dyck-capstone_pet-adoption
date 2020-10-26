import React from 'react';
import { Link } from 'react-router-dom';
import './adoptableCats.scss'

function AdoptableCats(catList) {
    return (
        <div className="animals">
            <div className="animals__hero">
                <h1 className="animals__hero-title">Available Cats</h1>
            </div>
            <h2 className="animals__intro">Looking for a different animal? Choose from one of our options below:</h2>
            <div className="animals__nav">
                <Link to="/adoptable-animals" className="animals__nav-link">
                    <button className="animals__nav-link-button">All</button>
                </Link>
                <Link to="/adoptable-animals/dogs" className="animals__nav-link">
                    <button className="animals__nav-link-button">Dogs</button>
                </Link>
                <Link to="/adoptable-animals/critters" className="animals__nav-link">
                    <button className="animals__nav-link-button">Critters</button>
                </Link>
            </div>
            <div className="animals__available">
                {!catList.length ? 
                    (
                    <div className="animals__available-loading">
                        <h2>Oh no! Looks like there are no cats available for adoption right now. Sign up to be notified when new ones are available today:</h2>
                        <Link to="/login" className="animals__available-loading-link">
                            <button className="animals__available-loading-link-button">Sign Up Today</button>
                        </Link>
                    </div>
                    ):(
                        catList.map(animal => {
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

export default AdoptableCats;