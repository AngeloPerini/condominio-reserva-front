// src/pages/Home.jsx
import React from 'react';
import EspacoCard from '../components/EspacoCard';

const Home = () => {
    return (
        <div className="pt-12 pb-16">
            {/* Título e Subtítulo */}
            <div className="text-center mb-12">
                {/* Título: CLARO (text-dark-blue) | ESCURO (dark:text-white) */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-dark-blue dark:text-white mb-3">
                    Bem-vindo ao portal de reservas do Morada!
                </h1>
                {/* Subtítulo: CLARO (text-gray-700) | ESCURO (dark:text-gray-300) */}
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Gerencie suas reservas de quadras, salões e quiosques com praticidade e agilidade.
                </p>
            </div>

            {/* Seção de Cards (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* ... Seus EspacoCard componentes ... */}
                <EspacoCard
                    title="Quadras Esportivas"
                    description="Campo de Futebol de grama, Quadra de Areia, Quadra Poliesportiva."
                    buttonText="Ver Quadras"
                    buttonColor="btn-quadra"
                    linkTo="/espacos/quadras"
                />

                <EspacoCard
                    title="Salão de Festas"
                    description="Espaço amplo para seus eventos e celebrações."
                    buttonText="Ver Salão"
                    buttonColor="btn-salao"
                    linkTo="/espacos/salao"
                />

                <EspacoCard
                    title="Quiosques com Churrasqueira"
                    description="Perfeito para um churrasco ou encontro casual."
                    buttonText="Ver Quiosques"
                    buttonColor="btn-quiosque"
                    linkTo="/espacos/quiosques"
                />
            </div>
        </div>
    );
};

export default Home;