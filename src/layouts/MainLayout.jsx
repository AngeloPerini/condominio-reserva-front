// src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        // Fundo padrão CLARO (bg-gray-100) | Fundo ESCURO (dark:bg-dark-blue)
        <div className="min-h-screen bg-gray-100 dark:bg-dark-blue transition duration-300">
            <Header />
            <main className="container mx-auto p-4 md:p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;