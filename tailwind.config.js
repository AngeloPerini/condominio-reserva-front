// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Essencial para escanear seus componentes
    ],
    darkMode: 'class', // Permite o modo claro/escuro via classe
    theme: {
        extend: {
            // Cores baseadas no design fornecido
            colors: {
                'dark-blue': '#1a2035', // Fundo principal
                'header-blue': '#1c243d', // Azul mais escuro para o header/cards
                'green-primary': '#48c459', // Verde do botão Login/Cadastrar
                'btn-quadra': '#526d7f', // Cor do botão "Ver Quadras"
                'btn-salao': '#8b5cf6', // Cor do botão "Ver Salão"
                'btn-quiosque': '#ef4444', // Cor do botão "Ver Quiosques"
            },
        },
    },
    plugins: [],
}