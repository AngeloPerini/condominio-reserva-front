// src/pages/Login.jsx - FINALMENTE CORRIGIDO E PRONTO

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { LuEye, LuEyeOff } from 'react-icons/lu'; // Ícones de olho

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para visualização de senha

    // 🚨 CORREÇÃO: Função de Login Padrão
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica futura: Conectar ao Back-end (API .NET /api/auth/login)
        console.log('Tentativa de Login Padrão:', { email, password });
    };

    // 🚨 CORREÇÃO: Função de Login com Google (Sintaxe limpa)
    const handleGoogleLogin = () => {
        // Lógica futura: Iniciar o fluxo de login com o Google
        console.log('Tentativa de Login com Google: Inicia fluxo OAuth...');
    };

    return (
        <div className="flex justify-center items-center py-16">
            {/* Fundo do formulário: CLARO (bg-white) | ESCURO (dark:bg-header-blue) */}
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl dark:bg-header-blue dark:shadow-2xl">
                {/* Título: CLARO (text-dark-blue) | ESCURO (dark:text-white) */}
                <h2 className="text-3xl font-bold text-dark-blue mb-6 text-center dark:text-white">Entrar no Sistema</h2>

                {/* Botão de Login com Google */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center bg-white text-dark-blue font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition duration-200 shadow-md mb-6"
                >
                    <FcGoogle className="w-6 h-6 mr-2" />
                    Entrar com Google
                </button>

                {/* Divisor */}
                <div className="flex items-center mb-6">
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm dark:text-gray-400">ou com seu email</span>
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Campo Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:outline-none focus:ring-2 focus:ring-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    {/* Campo Senha com Visualização */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Senha</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'} // Alterna o tipo do input
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:outline-none focus:ring-2 focus:ring-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-dark-blue dark:hover:text-white"
                                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                            >
                                {/* Alterna o ícone */}
                                {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Botão de Submissão */}
                    <button
                        type="submit"
                        className="w-full bg-green-primary text-dark-blue font-bold py-2.5 rounded-lg hover:bg-opacity-90 transition duration-200 shadow-lg"
                    >
                        Login
                    </button>
                </form>

                {/* Link de Cadastro */}
                <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
                    Não tem conta?{' '}
                    <Link to="/cadastro" className="text-green-primary hover:text-green-primary/80 font-semibold transition duration-200">
                        Cadastre-se agora
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;