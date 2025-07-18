import React, { useEffect, useState } from 'react';
import Axon from "../assets/sponsors/image 27.png";
import Jetstar from "../assets/sponsors/image 28.png";
import Expedia from "../assets/sponsors/image 29.png";
import Qantas from "../assets/sponsors/image 30.png";
import Alitalia from "../assets/sponsors/image 31.png";
import Big from "../assets/sponsors/logos.png";

const sponsors = [
    { id: 1, name: 'Axon', image: Axon },
    { id: 2, name: 'Jetstar', image: Jetstar },
    { id: 3, name: 'Expedia', image: Expedia },
    { id: 4, name: 'Qantas', image: Qantas },
    { id: 5, name: 'Alitalia', image: Alitalia },
];

const Sponsors = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="sponsors-section">
            <div className="sponsors-logos">
                {isMobile ? (
                    sponsors.map((sponsor) => (
                        <img key={sponsor.id} src={sponsor.image} alt={sponsor.name} className="mini-logo" />
                    ))
                ) : (
                    <img src={Big} alt="Big Sponsor" className="big-logo" />
                )}
            </div>
        </div>
    );
};

export default Sponsors;
