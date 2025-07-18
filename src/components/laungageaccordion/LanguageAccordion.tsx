import React, { useState } from 'react';
import './LanguageAccordion.css';

const languages = [
    { name: 'English', description: 'English is a West Germanic language spoken worldwide.' },
    { name: 'Spanish', description: 'Spanish is a Romance language with over 400 million speakers.' },
    { name: 'French', description: 'French is spoken in France, Canada, and many African countries.' },
    { name: 'Kyrgyz', description: 'Кыргыз тили — Кыргыз Республикасынын мамлекеттик тили.' },
];

const LanguageAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordion">
            {languages.map((lang, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className="accordion-title"
                        onClick={() => toggle(index)}
                    >
                        {lang.name}
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">{lang.description}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LanguageAccordion;
