import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

function Home(routeProps) {
    return (
        <div className='home'>
            <div className="home__hero">
                <h1 className="home__hero-title">Welcome to Pet Portal!</h1>
                <h2 className="home__hero-blurb">We are so excited to help make your adoption journey a better one!</h2>
            </div>
            <div className="home__main">
                <div className="home__main-login">
                    <p className="home__hero-description">As you may have discovered, searching for a pet to adopt can be easy. But actually getting one can be tough! With the high number of families looking to adopt a new pet, there is a lot of competition to get  your name in first. Well, we are here to help with that! By getting you to sign up for notifications, we will tell you when a new animal has been posted that fits your specifications so you can apply without constantly monitoring the sites yourself! You will get your life back and still be able to monitor the new adoptions available near you!</p>
                    <Link to="/login">
                        <button>Sign Up</button>
                    </Link>
                </div>
                <div className="main__animals">
                    <h2 className="home__animals-intro">Checkout our current adoptable animals below:</h2>
                    <div className="home__animals-card">
                        <img src="" alt="" className="home__animals-card-image"/>
                        <h3 className="home__animals-card-title">Adoptable Cats</h3>
                        <Link to='/adoptable-animals/cats'className="home__animals-card-link">
                            <button>See Current Postings</button>
                        </Link>
                    </div>
                    <div className="home__animals-card">
                        <img src="" alt="" className="home__animals-card-image"/>
                        <h3 className="home__animals-card-title">Adoptable Dogs</h3>
                        <Link to='/adoptable-animals/dogs'className="home__animals-card-link">
                            <button>See Current Postings</button>
                        </Link>
                    </div>
                    <div className="home__animals-card">
                        <img src="" alt="" className="home__animals-card-image"/>
                        <h3 className="home__animals-card-title">Adoptable Critters</h3>
                        <Link to='/adoptable-animals/critters'className="home__animals-card-link">
                            <button>See Current Postings</button>
                        </Link>
                    </div>
                </div>                
            </div>            
        </div>
    );
}

export default Home;