// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Certifique-se de que App.jsx existe na pasta src
import './index.css'; // Importa os estilos globais (incluindo Tailwind)
import { ThemeProvider } from './contexts/ThemeContext.jsx'; // Importa o ThemeProvider

// O ponto de entrada principal do aplicativo
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider> {/* 🚨 Envolva o App aqui */}
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);