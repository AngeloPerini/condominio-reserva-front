// src/pages/Cadastro.jsx - ATUALIZADO com visualização de senha
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuEye, LuEyeOff } from 'react-icons/lu'; // Ícones de olho

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        apartamento: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false); // NOVO ESTADO

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tentativa de Cadastro:', formData);
    };

    return (
        <div className="flex justify-center items-center py-12">
            <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl dark:bg-header-blue dark:shadow-2xl">
                <h2 className="text-3xl font-bold text-dark-blue mb-6 text-center dark:text-white">Cadastro de Morador</h2>

                <form onSubmit={handleSubmit}>

                    {/* ... Outros Campos (Nome, Email, Apartamento) - Mantidos ... */}

                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Nome Completo</label>
                        <input
                            type="text"
                            id="nome"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:outline-none focus:ring-2 focus:ring-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:outline-none focus:ring-2 focus:ring-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="apartamento" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Apartamento / Unidade</label>
                        <input
                            type="text"
                            id="apartamento"
                            required
                            value={formData.apartamento}
                            onChange={handleChange}
                            placeholder="Ex: Bloco A, Ap 101"
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:outline-none focus:ring-2 focus:ring-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white"
                        />
                    </div>

                    {/* Campo Senha (ALTERADO) */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Senha</label>
                        <div className="relative"> {/* Container para posicionar o botão */}
                            <input
                                type={showPassword ? 'text' : 'password'} // Alterna o tipo
                                id="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:outline-none focus:ring-2 focus:ring-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white pr-10" // pr-10 para o padding do botão
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400 hover:text-dark-blue dark:hover:text-white"
                                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                            >
                                {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* ... Botão de Submissão ... */}
                </form>

                {/* ... Link de Login ... */}
            </div>
        </div>
    );
};

export default Cadastro;