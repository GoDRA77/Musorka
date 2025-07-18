import React from 'react';
import './Footer.css';
import facebookIcon from '../assets/footer/Social.png';
import instagramIcon from '../assets/footer/Social (1).png';
import twitterIcon from '../assets/footer/Social (2).png';
import googlePlayIcon from '../assets/footer/Google Play.png';
import appStoreIcon from '../assets/footer/Play Store.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-logo">Jadoo.</h3>
                    <p className="footer-tagline">
                        Book your trip in minute, get full control for much longer.
                    </p>
                </div>
                <div className="footer-section">
                    <h4 className="footer-section-title">Company</h4>
                    <ul className="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#mobile">Mobile</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-section-title">Contact</h4>
                    <ul className="footer-links">
                        <li><a href="#help">Help/FAQ</a></li>
                        <li><a href="#press">Press</a></li>
                        <li><a href="#affiliates">Affiliates</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4 className="footer-section-title">More</h4>
                    <ul className="footer-links">
                        <li><a href="#airlinfees">Airlinefees</a></li>
                        <li><a href="#airline">Airline</a></li>
                        <li><a href="#low-fare-tips">Low fare tips</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <div className="footer-social">
                        <a href="#facebook"><img src={facebookIcon} alt="Facebook" className="social-icon" /></a>
                        <a href="#instagram"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
                        <a href="#twitter"><img src={twitterIcon} alt="Twitter" className="social-icon" /></a>
                    </div>
                    <div className="footer-apps">
                        <a href="#google-play"><img src={googlePlayIcon} alt="Google Play" className="app-icon" /></a>
                        <a href="#app-store"><img src={appStoreIcon} alt="App Store" className="app-icon" /></a>
                    </div>
                    <p className="footer-discover">Discover our app</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>All rights reserved @jadoo.co</p>
            </div>
        </footer>
    );
};

export default Footer;