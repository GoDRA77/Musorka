import React from 'react';
import './Category.css';
import weatherIcon from '../assets/category/Group 48.png';
import flightIcon from '../assets/category/Group 51.png';
import micIcon from '../assets/category/Group 50.png';
import gearIcon from '../assets/category/Group 49.png';

const services = [
    {
        icon: weatherIcon,
        title: 'Calculated Weather',
        description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
        icon: flightIcon,
        title: 'Best Flights',
        description: 'Engrossed listening. Park gate sell they west hard for the.',
        highlight: true,
    },
    {
        icon: micIcon,
        title: 'Local Events',
        description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.',
    },
    {
        icon: gearIcon,
        title: 'Customization',
        description: 'We deliver outsourced aviation services for military customers.',
    },
];

const Category = () => {
    return (
        <div className="category-section">
            <div className="little-text">CATEGORY</div>
            <div className="big-text">We Offer Best Services</div>

            <div className="services">
                {services.map((service, index) => (
                    <div
                        className={`service-card ${service.highlight ? 'highlighted' : ''}`}
                        key={index}
                    >
                        <img src={service.icon} alt={service.title} className="service-icon" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
