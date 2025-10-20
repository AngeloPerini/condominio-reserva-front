// src/pages/Espacos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Dados de exemplo MOCK
const ESPACOS_MOCK = [
    { id: 1, nome: "Campo de Futebol", tipo: "Quadra", maxHoras: 4, descricao: "Campo de grama sintética, perfeito para futebol de 7." },
    { id: 2, nome: "Quadra de Areia", tipo: "Quadra", maxHoras: 4, descricao: "Ideal para futevôlei e vôlei de praia." },
    { id: 3, nome: "Quadra Poliesportiva", tipo: "Quadra", maxHoras: 4, descricao: "Para basquete, vôlei ou futsal." },
    { id: 4, nome: "Salão Principal", tipo: "Salão de Festas", maxHoras: 24, descricao: "Espaço climatizado, ideal para grandes eventos e aniversários." },
    { id: 5, nome: "Quiosque 1 (Grande)", tipo: "Quiosque", maxHoras: 24, descricao: "Inclui 4 mesas, 20 cadeiras e 2 churrasqueiras." },
    { id: 6, nome: "Quiosque 2 (Pequeno)", tipo: "Quiosque", maxHoras: 24, descricao: "Inclui 2 mesas, 10 cadeiras e 1 churrasqueira." },
];

const Espacos = () => {
    return (
        <div className="py-12">
            {/* Título: CLARO (text-dark-blue) | ESCURO (dark:text-white) */}
            <h1 className="text-4xl font-bold text-dark-blue dark:text-white mb-8 text-center">Todos os Espaços para Reserva</h1>

            {/* Container de Cards de Espaços */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {ESPACOS_MOCK.map((espaco) => (
                    // Fundo do Card: CLARO (bg-white) | ESCURO (dark:bg-header-blue)
                    <div key={espaco.id} className="bg-white p-6 rounded-xl shadow-xl dark:bg-header-blue hover:shadow-green-primary/30 transition duration-300">

                        {/* Título do Espaço: CLARO (text-green-primary) | ESCURO (dark:text-green-primary) */}
                        <h2 className="text-2xl font-semibold mb-2 text-green-primary">{espaco.nome}</h2>

                        {/* Tag Tipo (não precisa de dark: pois o fundo e texto são fixos) */}
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 
              ${espaco.tipo === 'Quadra' ? 'bg-btn-quadra text-white' : ''}
              ${espaco.tipo === 'Salão de Festas' ? 'bg-btn-salao text-white' : ''}
              ${espaco.tipo === 'Quiosque' ? 'bg-btn-quiosque text-white' : ''}
            `}>
                            {espaco.tipo}
                        </span>

                        {/* Descrição: CLARO (text-gray-600) | ESCURO (dark:text-gray-300) */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 h-12 overflow-hidden">{espaco.descricao}</p>

                        {/* Duração Máxima: CLARO (text-gray-500) | ESCURO (dark:text-gray-400) */}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Duração Máxima: <span className="font-bold text-dark-blue dark:text-white">{espaco.maxHoras}h</span>
                        </p>

                        <Link
                            to={`/espacos/${espaco.id}`}
                            className="mt-4 block w-full text-center bg-green-primary text-dark-blue font-bold py-2 rounded-lg hover:bg-opacity-90 transition duration-200"
                        >
                            Ver Detalhes e Reservar
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Espacos;