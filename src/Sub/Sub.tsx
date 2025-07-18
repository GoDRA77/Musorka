import React from 'react';
import './Sub.css';
import airplaneIcon from '../assets/Group 77.png'; // Replace with actual icon path

const Sub = () => {
    return (
        <div className="sub-container">
            <div className="sub-content">
                <p className="sub-text">
                    Subscribe to get information, latest news and other interesting offers about Jadoo
                </p>
                <div className="sub-input-group">
                    <input type="email" placeholder="Your email" className="sub-input" />
                    <button className="sub-button">Subscribe</button>
                </div>
            </div>
            <img src={airplaneIcon} alt="Airplane Icon" className="sub-icon" />
        </div>
    );
};

export default Sub;