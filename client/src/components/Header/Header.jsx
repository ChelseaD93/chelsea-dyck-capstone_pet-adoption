import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <Link to='/' className='header__logo'>
                <p className="header__logo-name">Pet Portal</p>
            </Link>
            <div className="header__nav">
                <Link to='/' className='header__nav-link'>
                    <p className="header__nav-link-text">Home</p>
                </Link>
                <Link to='/about' className='header__nav-link'>
                    <p className="header__nav-link-text">About</p>
                </Link>
                <Link to='/login' className='header__nav-link'>
                    <p className="header__nav-link-text">Login</p>
                </Link>
                <Link to='/adoptable-animals' className='header__nav-link'>
                    <p className="header__nav-link-text">Adoptable Animals</p>
                </Link>                
                {/* { isLoggedIn &&
                <Link to='/profile' className='header__nav-link'>
                    <p className="header__nav-link-text">Profile</p>
                </Link>
                } */}
            </div>
        </div>
    );
}

export default Header;