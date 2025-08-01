import React, { useEffect, useState } from "react";
import axios from "axios";
import puzzle from "../../../src/assets/ProfilePage/aeb6822331b05ad81ba4159d5882c8f22c1f944c.png";
import road from "../../../src/assets/ProfilePage/a37b6540a15cc9a83837aa85047de24e5fdb4b0d.png";
import task from "../../../src/assets/ProfilePage/f948a2a10effbd66c81290e233e21741d3198a99.png";
import { useNavigate } from "react-router-dom";
import style from "./Profile.module.css";
import SavedQuestions from "./profile savedquestions/SavedQuestions.jsx";

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const mockData = {
      name: "Рик Граймс Краш",
      university: "AUCA",
      bio: "Школьник, целеустремленный...",
      avatar: "../../../src/assets/ProfilePage/6e1fdc17903c7bb070d9ad684dae08839e66881f.jpg",
      interests: ["Математика", "Физика" ,"Математика", "Физика","Математика", "Физика"],
      stats: {
        solved: 1642,
        correctRatio: "89 : 11%",
        testsPassed: 124,
        rating: 188,
        score: 235
      },
      savedQuestions: [
        { id: 1, image: "../../../src/assets/ProfilePage/Mask group.png", answers: ["A", "B", "C"] },
        { id: 2, image: "../../../src/assets/ProfilePage/Mask group.png", answers: ["A", "B", "C"] },
        { id: 3, image: "../../../src/assets/ProfilePage/Mask group.png", answers: ["A", "B", "C"] },
        { id: 4, image: "../../../src/assets/ProfilePage/Mask group.png", answers: ["A", "B", "C"] },
        { id: 5, image: "../../../src/assets/ProfilePage/Mask group.png", answers: ["A", "B", "C"] }
      ]
    };

    setProfile(mockData);
  }, []);

  const handleEdit = () => {
    navigate("/profile/edit");
  };

  if (!profile) return <div>Загрузка...</div>;

  return (
      <div className={style.profileContainer}>
        <div className={style.profileContent}>

          {/* Левая колонка */}
          <div className={style.profileCard}>
            <img src={profile.avatar} alt="avatar" className={style.avatar} />
            <h2 className={style.name}>{profile.name}</h2>
            <p className={style.university}>{profile.university}</p>

            <h3 className={style.sectionTitle}>Интересующие секции:</h3>
            <ul className={style.interests}>
              {profile.interests.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
            </ul>

            <button className={style.editBtn} onClick={handleEdit}>
              Редактировать
            </button>
          </div>

          {/* Правая часть */}
          <div className={style.mainBlock}>
            <h3 className={style.sectionTitle}>Информация о пользователе</h3>
            <p>{profile.bio}</p>

            <h3 className={style.sectionTitle}>Статистика пользователя</h3>
            <div className={style.stats}>
              <div className={style.card} style={{ background: "#FAD961" }}>
                <img src={puzzle} alt="puzzle" />
                <br />
                <strong>{profile.stats.solved}</strong><br />Решённых вопросов
              </div>
              <div className={style.card} style={{ background: "#0033cc", color: "#fff" }}>
                <img src={task} alt="ratio" />
                <br />
                <strong>{profile.stats.correctRatio}</strong><br />Соотношение ответов
              </div>
              <div className={style.card} style={{ background: "#E08E79" }}>
                <img src={road} alt="tests" />
                <br />
                <strong>{profile.stats.testsPassed}</strong><br />Пройденных тестов
              </div>
            </div>

            <h3 className={style.sectionTitle}>Рейтинг пользователя</h3>
            <div className={style.rating}>
              <div className={style.circle}>#{profile.stats.rating}</div>
              <div>Приблизительный балл пользователя:</div>
              <img src="/your-star.png" alt="star" />
              <br />
              <strong>{profile.stats.score}</strong>
            </div>

            {/* Сохранённые вопросы */}
            <div className={style.savedBlock}>
              <div className={style.savedQuestionsHeader}>
                <h3 className={style.sectionTitle}>Сохранённые вопросы</h3>
                <span className={style.viewAll} onClick={() => navigate("/saved-questions")}>
                Посмотреть все
              </span>
              </div>
              <SavedQuestions questions={profile.savedQuestions.slice(0, 4)} />
            </div>

          </div>
        </div>
      </div>
  );
}
