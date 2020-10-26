import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <Link to='/' className='header__logo'>
                <p className="header__logo-name">Pet Portal</p>
            </Link>
            <div className="header__nav">
                <NavLink to='/' className='header__nav-link' activeClassName="header__nav-link--active">
                    <p className="header__nav-link-text">Home</p>
                </NavLink>
                <NavLink to='/about' className='header__nav-link' activeClassName="header__nav-link--active">
                    <p className="header__nav-link-text">About</p>
                </NavLink>
                <NavLink to='/login' className='header__nav-link' activeClassName="header__nav-link--active">
                    <p className="header__nav-link-text">Sign Up</p>
                </NavLink>
                <NavLink to='/adoptable-animals' className='header__nav-link' activeClassName="header__nav-link--active">
                    <p className="header__nav-link-text">Adoptable Animals</p>
                </NavLink>                
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