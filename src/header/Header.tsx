import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="Header">
            <img src={logo} alt="logo" className="logo" />
            <div className={`navButtons ${isMenuOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                        <li><a href="#home">Destinations</a></li>
                        <li><a href="#destinations">Hotels</a></li>
                        <li><a href="#testimonials">Flights</a></li>
                        <li><a href="#contact">Bookings</a></li>
                    </ul>
                    <div className="auth-lang">
                        <button>Login</button>
                        <button>Sign Up</button>
                        <select className="lang-select">
                            <option>EN</option>
                            <option>FR</option>
                        </select>
                    </div>
                </nav>
            </div>
            <div className="burger" onClick={() => setMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
