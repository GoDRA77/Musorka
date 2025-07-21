import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./header/Header.tsx";
import BigImage from "./bigimage/BigImage.tsx";
import Category from "./category/Category.tsx";
import Destinations from "./destinations/Destinations.tsx";
import Book from "./Book/Book.tsx";
import Testimonials from "./estimates/Estimates.tsx";
import Sub from "./Sub/Sub.tsx";
import Footer from "./Footer/Footer.tsx";

interface Destination {
    name: string;
    image: string;
    description: string;
}

interface Testimonial {
    name: string;
    text: string;
    rating: number;
}

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const destinations: Destination[] = [
        { name: 'Rome', image: 'rome.jpg', description: 'Explore the historic Colosseum and Roman Forum.' },
        { name: 'London', image: 'london.jpg', description: 'Discover Big Ben and the vibrant culture.' },
        { name: 'Greece', image: 'greece.jpg', description: 'Relax on the stunning beaches of Santorini.' },
    ];

    const testimonials: Testimonial[] = [
        { name: 'John Doe', text: 'Amazing experience with seamless booking!', rating: 5 },
        { name: 'Jane Smith', text: 'Loved the curated Europe trip.', rating: 4 },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed with:', email);
    };

    return (
        <div>
            <Header/>
            <BigImage/>
            <Category/>
            <Destinations/>
            <Book/>
            <Testimonials/>

            <Sub/>
            <Footer/>
        </div>
    );
};

export default App;
