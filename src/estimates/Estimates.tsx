import React, { useState } from 'react';
import './Estimates.css';
import Man from '../assets/young-bearded-man-with-striped-shirt.jpg';



const testimonials = [
    {
        id: 1,
        name: 'Mike Taylor',
        role: 'Chief of Tech Button',
        image: Man,
        text: 'The windows looking posture yet its express parties use. Sure upon him some on some parties use.',
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        role: 'Marketing Lead',
        image: Man,
        text: 'Great service and amazing support! Highly recommend to anyone looking for travel solutions.',
    },
    {
        id: 3,
        name: 'Emma Wilson',
        role: 'Travel Enthusiast',
        image: Man,
        text: 'Easy to book and the experience was fantastic. Looking forward to my next trip!',
    },
    {
        id: 4,
        name: 'John Doe',
        role: 'Adventure Guide',
        image: Man,
        text: 'Best travel platform I’ve used. Seamless and reliable every time.',
    },
];



const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <div>
                        <h3 className="testimonials-subtitle">TESTIMONIALS</h3>
                        <h2 className="testimonials-title">What People Say About Us.</h2>
                    </div>
                    <div className="testimonials-bullets">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`bullet ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="testimonials-slider">
                    <button className="nav-button prev" onClick={prevTestimonial}>‹</button>
                    <div className="testimonial-card">
                        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
                        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                        <div className="testimonial-author">
                            <span className="author-name">{testimonials[currentIndex].name}</span>
                            <span className="author-role">{testimonials[currentIndex].role}</span>
                        </div>
                    </div>
                    <button className="nav-button next" onClick={nextTestimonial}>›</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;