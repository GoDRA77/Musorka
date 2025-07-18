import React from 'react';
import { FaMapMarkerAlt, FaCreditCard, FaPlaneDeparture, FaHeart, FaUserFriends } from 'react-icons/fa';
import './Book.css'
const steps = [
    {
        icon: <FaMapMarkerAlt className="custom-icon-yellow" />,
        title: 'Choose Destination',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
    {
        icon: <FaCreditCard className="custom-icon-red" />,
        title: 'Make Payment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
    {
        icon: <FaPlaneDeparture className="custom-icon-cyan" />,
        title: 'Reach Airport on Selected Date',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
    },
];

const TripSteps = () => {
    return (
        <section className="trip-steps-container">
            <div className="text-part">
                <p className="easy-fast-text">Easy and Fast</p>
                <h2 className="title-text">
                    Book Your Next Trip <br /> In 3 Easy Steps
                </h2>
                <ul className="steps-list">
                    {steps.map((step, index) => (
                        <li key={index} className="step-item">
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="card-part">
                <div className="main-card">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Trip"
                        className="card-image"
                    />
                    <div className="card-content">
                        <h3 className="card-title">Trip To Greece</h3>
                        <p className="card-subtitle">14–29 June | by Robbin J</p>
                        <div className="card-icons">
                            <FaHeart className="card-icon" />
                            <FaMapMarkerAlt className="card-icon" />
                            <FaCreditCard className="card-icon" />
                        </div>
                        <div className="card-people">
                            <FaUserFriends className="card-icon" />
                            <span className="people-text">24 people going</span>
                        </div>
                    </div>
                </div>

                {/* Small floating card */}
                <div className="floating-card">
                    <p className="floating-card-status">Ongoing</p>
                    <h4 className="floating-card-title">Trip to Rome</h4>
                    <div className="floating-card-progress-text">40% completed</div>
                    <div className="floating-card-progress-bar">
                        <div className="floating-card-progress-fill"></div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TripSteps;
