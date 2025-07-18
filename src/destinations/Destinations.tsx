import React from 'react';
import './Destinations.css';

import rome from '../assets/32e1459ae49e57046b9c9bf320fe245919168bb0.png'
import london from '../assets/599d5437ff6f71a7522170940c3ac66332ac8d2f.jpg';
import europe from '../assets/1119f8e879b2e4cb46bd33155639a62530f9a579.png';
import flightIcon from '../assets/plane.png';

const destinations = [
    {
        image: rome,
        title: 'Rome, Italy',
        price: '$5,42k',
        days: '10 Days Trip',
    },
    {
        image: london,
        title: 'London, UK',
        price: '$4.2k',
        days: '12 Days Trip',
    },
    {
        image: europe,
        title: 'Full Europe',
        price: '$15k',
        days: '28 Days Trip',
    },
];

const Destinations = () => {
    return (
        <div className="destination-section">
            <div className="little-text">Top Selling</div>
            <div className="big-text">Top Destinations</div>

            <div className="destination-cards">
                {destinations.map((item, index) => (
                    <div className="destination-card" key={index}>
                        <img src={item.image} alt={item.title} className="destination-img" />
                        <div className="destination-info">
                            <div className="destination-header">
                                <span className="title">{item.title}</span>
                                <span className="price">{item.price}</span>
                            </div>
                            <div className="trip-info">
                                <img src={flightIcon} alt="flight" className="flight-icon" />
                                <span>{item.days}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
