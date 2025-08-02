import React, { useEffect, useState } from "react";
import axios from "axios";
import puzzle from "../../../src/assets/ProfilePage/aeb6822331b05ad81ba4159d5882c8f22c1f944c.png";
import road from "../../../src/assets/ProfilePage/a37b6540a15cc9a83837aa85047de24e5fdb4b0d.png";
import task from "../../../src/assets/ProfilePage/f948a2a10effbd66c81290e233e21741d3198a99.png";
import star from "../../../src/assets/ProfilePage/Star 1 (1).png";
import { useNavigate } from "react-router-dom";
import style from "./Profile.module.css";
import SavedQuestions from "./profile savedquestions/SavedQuestions.jsx";

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
        .get("https://ort-reels.onrender.com/user/me")
        .then((res) => {
          const data = res.data;

          const solved = data.usedQuestions?.length || 0;

          const correctAnswers = data.usedQuestions?.flatMap((q) =>
              q.answers.filter((a) => a.correct)
          ).length || 0;

          const totalAnswers = data.usedQuestions?.reduce(
              (acc, q) => acc + q.answers.length,
              0
          ) || 0;

          const correctRatio =
              totalAnswers > 0
                  ? `${Math.round((correctAnswers / totalAnswers) * 100)} : ${
                      100 - Math.round((correctAnswers / totalAnswers) * 100)
                  }%`
                  : "0 : 0%";

          const formattedProfile = {
            name: `${data.name} ${data.surname}`,
            university: "AUCA", // заглушка
            bio: "Школьник, целеустремленный...", // заглушка
            avatar: data.avatar?.[0] || "https://i.pravatar.cc/150",
            interests: data.interest || [],
            stats: {
              solved,
              correctRatio,
              testsPassed: 0,
              rating: 0,
              score: 0,
            },
            savedQuestions: data.savedQuestions?.map((q) => ({
              id: q.id,
              image: "https://via.placeholder.com/150", // заглушка
              answers: q.answers.map((a) => a.answer),
            })) || [],
          };

          setProfile(formattedProfile);
        })
        .catch((err) => {
          console.error(err);
          setError("Не удалось загрузить данные профиля.");
        });
  }, []);

  const handleEdit = () => {
    navigate("/profile/edit");
  };

  if (error) return <div>{error}</div>;
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
                <strong>{profile.stats.solved}</strong>
                <br />
                Решённых вопросов
              </div>
              <div
                  className={style.card}
                  style={{ background: "#0033cc", color: "#fff" }}
              >
                <img src={task} alt="ratio" />
                <br />
                <strong>{profile.stats.correctRatio}</strong>
                <br />
                Соотношение ответов
              </div>
              <div className={style.card} style={{ background: "#E08E79" }}>
                <img src={road} alt="tests" />
                <br />
                <strong>{profile.stats.testsPassed}</strong>
                <br />
                Пройденных тестов
              </div>
            </div>

            <h3 className={style.sectionTitle}>Рейтинг пользователя</h3>
            <div className={style.rating}>
              <div className={style.circle}>#{profile.stats.rating}</div>
              <div>Приблизительный балл пользователя:</div>
              <div className={style.circle1}>
                <strong>{profile.stats.score}</strong>
              </div>
              <br />
            </div>

            {/* Сохранённые вопросы (если используешь компонент) */}
            <SavedQuestions questions={profile.savedQuestions} />
          </div>
        </div>
      </div>
  );
}
