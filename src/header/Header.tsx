import React from 'react';
import logo from '../assets/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <img src={logo} alt="logo" className="logo" />
            <div className="navButtons">
                <nav>
                    <ul>
                        <li><a href="#home">Destinations</a></li>
                        <li><a href="#destinations">Hotels</a></li>
                        <li><a href="#testimonials">Flights</a></li>
                        <li><a href="#contact">Bookings</a></li>
                    </ul>
                    <button>Login</button>
                    <button>Sign Up</button>
                    <select className="lang-select">
                        <option>EN</option>
                        <option>FR</option>
                    </select>
                </nav>
            </div>
        </header>
    );
};

export default Header;