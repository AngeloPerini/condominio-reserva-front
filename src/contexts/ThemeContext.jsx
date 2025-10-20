// src/contexts/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;

        // Lógica de aplicação de classe:
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // 🚨 CORREÇÃO: localStorage.setItem agora está DENTRO do useEffect
        localStorage.setItem('theme', theme);

        // 🚨 CORREÇÃO: O array de dependências agora está no lugar correto
    }, [theme]); // <--- Array de dependências, garante que o efeito roda quando 'theme' muda

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);