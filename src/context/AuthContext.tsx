import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
    user: { username: string } | null;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ username: string } | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const navigate = useNavigate();

    const login = (username: string, password: string): boolean => {
        if (username === 'admin' && password === '1234') {
            const userData = { username };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    }, [navigate]);

    useEffect(() => {
        const resetTimer = () => {
            clearTimeout((window as any).logoutTimer);
            (window as any).logoutTimer = setTimeout(() => {
                logout();
            }, 5 * 60 * 1000); // 5 мин вроде
        };

        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keydown', resetTimer);
        resetTimer();

        return () => {
            clearTimeout((window as any).logoutTimer);
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('keydown', resetTimer);
        };
    }, [logout]);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
