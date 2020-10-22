import React from 'react';
import { Link } from 'react-router-dom';
import cat from '../../assets/images/ilse-orsel-gNDjqDFFtPM-unsplash.jpg';
import dog from '../../assets/images/sippakorn-yamkasikorn-AFfj2QTS8KM-unsplash.jpg';
import bunny from '../../assets/images/andriyko-podilnyk-3a1NOxCBY10-unsplash.jpg';
import './home.scss';

function Home(routeProps) {
    return (
        <div className='home'>
            <div className="home__hero">
                <h1 className="home__hero-title">Welcome to Pet Portal!</h1>
                <h2 className="home__hero-blurb">We are excited to help make your adoption journey easier.</h2>
            </div>
            <div className="home__main">
                <div className="home__main-login">
                    <p className="home__main-login-description">As you may have discovered, searching for a pet to adopt can be easy. But actually getting one can be tough! With the high number of families looking to adopt a new pet, there is a lot of competition to get  your name in first.</p>
                    <p className="home__main-login-description">We are here to help with that! By getting you to sign up for notifications, we will tell you when a new animal has been posted that fits your specifications so you can apply without constantly monitoring the sites yourself. You will get your life back and still have access the new adoptions available near you!</p>
                    <Link to="/login" className="home__main-login-link">
                        <button className="home__main-login-link-button">Sign Up Today</button>
                    </Link>
                </div>
                <div className="home__main-animals">
                    <h2 className="home__main-animalsintro">Checkout our current adoptable animals:</h2>
                    <div className="home__main-animals-card">
                        <img src={cat} alt="" className="home__main-animals-card-image"/>
                        <h3 className="home__main-animals-card-title">Adoptable Cats</h3>
                        <Link to='/adoptable-animals/cats'className="home__main-animals-card-link">
                            <button className="home__main-animals-card-link-button">See Current Postings</button>
                        </Link>
                    </div>
                    <div className="home__main-animals-card">
                        <img src={dog} alt="" className="home__main-animals-card-image"/>
                        <h3 className="home__main-animals-card-title">Adoptable Dogs</h3>
                        <Link to='/adoptable-animals/dogs'className="home__main-animals-card-link">
                            <button className="home__main-animals-card-link-button">See Current Postings</button>
                        </Link>
                    </div>
                    <div className="home__main-animals-card">
                        <img src={bunny} alt="" className="home__main-animals-card-image"/>
                        <h3 className="home__main-animals-card-title">Adoptable Critters</h3>
                        <Link to='/adoptable-animals/critters'className="home__main-animals-card-link">
                            <button className="home__main-animals-card-link-button">See Current Postings</button>
                        </Link>
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default Home;