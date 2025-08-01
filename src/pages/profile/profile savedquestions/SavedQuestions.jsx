import React, { useState, useEffect } from "react";
import styles from "./SavedQuestions.module.css";
import questionImage from '../../../assets/ProfilePage/Mask group.png'; // Example of direct import

export default function SavedQuestions({ questions = [] }) {
    const [displayQuestions, setDisplayQuestions] = useState(questions);

    useEffect(() => {
        if (!questions.length) {
            setDisplayQuestions([
                {
                    id: 1,
                    image: questionImage,
                    answers: [{id: 1, text: "A"}, {id: 2, text: "B"}, {id: 3, text: "C"}]
                },
                {
                    id: 1,
                    image: questionImage,
                    answers: [{id: 1, text: "A"}, {id: 2, text: "B"}, {id: 3, text: "C"}]
                },
                {
                    id: 1,
                    image: questionImage,
                    answers: [{id: 1, text: "A"}, {id: 2, text: "B"}, {id: 3, text: "C"}]
                },
                {
                    id: 1,
                    image: questionImage,
                    answers: [{id: 1, text: "A"}, {id: 2, text: "B"}, {id: 3, text: "C"}]
                }
                // ... other mock questions
            ]);
        }
    }, [questions.length]);

    if (!displayQuestions.length) return <p>Нет сохранённых вопросов</p>;

    return (
        <div className={styles.savedQuestionsContainer}>
            {displayQuestions.map((q) => (
                <div key={q.id} className={styles.questionCard}>
                    <img src={q.image} alt={`Question ${q.id}`} />
                    <div className={styles.answers}>
                        {q.answers?.map((a) => (
                            <button key={a.id}>{a.text}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}