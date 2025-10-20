// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { LuSun, LuMoon } from 'react-icons/lu';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        // Fundo: CLARO (bg-white) | ESCURO (dark:bg-header-blue)
        <header className="bg-white shadow-md dark:bg-header-blue dark:shadow-lg transition duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo/Título - Texto: CLARO (text-dark-blue) | ESCURO (dark:text-white) */}
                <Link to="/" className="text-xl font-bold text-dark-blue dark:text-white">
                    Condomínio Morada do Rio
                </Link>

                {/* Links de Navegação */}
                <nav className="hidden sm:flex space-x-6 items-center">
                    {/* Texto dos Links: CLARO (text-gray-700) | ESCURO (dark:text-gray-300) */}
                    <Link to="/" className="text-gray-700 hover:text-dark-blue transition duration-200 dark:text-gray-300 dark:hover:text-white">
                        Início
                    </Link>
                    <Link to="/espacos" className="text-gray-700 hover:text-dark-blue transition duration-200 dark:text-gray-300 dark:hover:text-white">
                        Espaços
                    </Link>
                </nav>

                {/* Botões de Ação */}
                <div className="flex space-x-3 items-center">
                    {/* Botão de Tema: CLARO (text-gray-700) | ESCURO (dark:text-gray-300) */}
                    <button
                        onClick={toggleTheme}
                        className="text-gray-700 hover:text-black p-2 transition duration-200 dark:text-gray-300 dark:hover:text-white"
                        aria-label="Alternar tema"
                    >
                        {theme === 'dark' ? (
                            <LuSun className="h-6 w-6" />
                        ) : (
                            <LuMoon className="h-6 w-6" />
                        )}
                    </button>

                    <Link to="/login" className="px-4 py-2 bg-green-primary text-dark-blue font-semibold rounded-lg hover:bg-opacity-80 transition duration-200">
                        Login
                    </Link>
                    <Link to="/cadastro" className="px-4 py-2 border border-green-primary text-green-primary font-semibold rounded-lg hover:bg-green-primary hover:text-dark-blue transition duration-200">
                        Cadastrar
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;