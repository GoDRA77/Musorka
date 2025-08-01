import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './friendsPage.module.css';
import emoji from '../../assets/frends/3115693 1 1.png';

export default function FriendsPage() {
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        // Мок-данные
        const mockFriends = [
            {
                id: 1,
                name: 'Алиса Смирнова',
                avatar: 'https://i.pravatar.cc/100?u=1',
                description: 'Люблю математику и кофе',
                lastSeen: 'Онлайн',
                online: true,
            },
            {
                id: 2,
                name: 'Борис Иванов',
                avatar: 'https://i.pravatar.cc/100?u=2',
                description: 'Готовлюсь к ЕГЭ',
                lastSeen: '5 минут назад',
                online: false,
            },
            {
                id: 3,
                name: 'Катя Волкова',
                avatar: 'https://i.pravatar.cc/100?u=3',
                description: 'Гуманитарий с душой математика',
                lastSeen: 'В сети недавно',
                online: true,
            },
            {
                id: 4,
                name: 'Михаил Петров',
                avatar: 'https://i.pravatar.cc/100?u=4',
                description: 'Физика, Linux и гитара',
                lastSeen: '2 часа назад',
                online: false,
            },
            {
                id: 5,
                name: 'Надя Литвинова',
                avatar: 'https://i.pravatar.cc/100?u=5',
                description: 'Шахматы и задачи на логику',
                lastSeen: 'Онлайн',
                online: true,
            },
        ];
        setFriends(mockFriends);
    }, []);

    return (
        <div className={style.page}>
            <div className={style.searchContainer}>
                <input
                    type="text"
                    placeholder="Поиск"
                    className={style.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {friends.length === 0 ? (
                <div className={style.empty}>
                    <img src={emoji} alt="No friends" />
                    <p>У тебя нет друзей 😢</p>
                    <button
                        onClick={() => navigate('/search')}
                        className={`${style.btn} ${style.primary}`}
                    >
                        Найти друзей
                    </button>
                </div>
            ) : (
                friends.map((f) => (
                    <div key={f.id} className={style.card}>
                        <div className={style.avatarWrapper}>
                            <img className={style.avatar} src={f.avatar} alt={f.name} />
                            {f.online && <span className={style.onlineDot} />}
                        </div>
                        <div className={style.info}>
                            <h3 className={style.name}>{f.name}</h3>
                            <p className={style.desc}>{f.description}</p>
                            <p className={style.lastSeen}>{f.lastSeen}</p>
                        </div>
                        <div className={style.actions}>
                            <button
                                onClick={() => navigate(`/messages/${f.id}`)}
                                className={`${style.btn} ${style.primary}`}
                            >
                                Написать
                            </button>
                            <button
                                onClick={() => navigate(`/profile/${f.id}`)}
                                className={`${style.btn} ${style.secondary}`}
                            >
                                Профиль
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
