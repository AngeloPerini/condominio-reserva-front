// src/components/EspacoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EspacoCard = ({ title, description, buttonText, buttonColor, linkTo }) => {
    const buttonClass = `px-6 py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:opacity-90 mt-4 
    ${buttonColor === 'btn-quadra' ? 'bg-btn-quadra' : ''}
    ${buttonColor === 'btn-salao' ? 'bg-btn-salao' : ''}
    ${buttonColor === 'btn-quiosque' ? 'bg-btn-quiosque' : ''}
`;

    return (
        // Fundo do card Padrão CLARO | ESCURO com dark:
        <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center dark:bg-header-blue dark:shadow-2xl dark:border-none">
            {/* Título: CLARO (text-dark-blue) | ESCURO (dark:text-white) */}
            <h3 className="text-xl font-bold mb-2 text-dark-blue dark:text-white">{title}</h3>
            {/* Descrição: CLARO (text-gray-600) | ESCURO (dark:text-gray-300) */}
            <p className="text-gray-600 mb-6 flex-grow dark:text-gray-300">{description}</p>

            {/* Imagem/Ícone (Placeholder) */}
            <div className="text-4xl mb-4">
                {buttonColor === 'btn-quadra' && <span>⚽</span>}
                {buttonColor === 'btn-salao' && <span>🎉</span>}
                {buttonColor === 'btn-quiosque' && <span>🍖</span>}
            </div>

            <Link to={linkTo} className={buttonClass}>
                {buttonText}
            </Link>
        </div>
    );
};

export default EspacoCard;