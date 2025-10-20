// src/pages/DetalheEspaco.jsx - CORRIGIDO
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
// IMPORTANTE: O CSS customizado do calendário (index.css) deve ter os estilos dark:

const DetalheEspaco = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // MOCK DATA (Simulando a busca na API)
    const espaco = {
        id: id,
        nome: id == 4 ? "Salão Principal" : (id == 1 ? "Campo de Futebol" : "Quiosque Exemplo"),
        tipo: id == 4 ? "Salão de Festas" : (id == 1 ? "Quadra" : "Quiosque"),
        maxHoras: id == 1 ? 4 : 24,
        regras: id == 1 ? "Máximo de 4 horas. Reserva não pode ser dividida." : "Reserva de 1 dia (24h) ou por período de 4 horas, mas não pode exceder 24h consecutivas.",
        complementos: id == 5 ? [{ nome: 'Cadeiras', quantidade: 20 }, { nome: 'Churrasqueira', quantidade: 2 }] : [],
    };

    const [selectedDate, setSelectedDate] = useState(null);
    const [horaInicio, setHoraInicio] = useState('');
    const [duracao, setDuracao] = useState(espaco.maxHoras);

    const handleReservar = () => {
        if (!selectedDate || !horaInicio) {
            alert('Selecione a data e a hora de início.');
            return;
        }
        navigate(`/reservar/${id}`, {
            state: {
                date: selectedDate,
                start: horaInicio,
                duration: duracao
            }
        });
    };

    return (
        <div className="py-12 max-w-5xl mx-auto">
            {/* Título: CLARO (text-dark-blue) | ESCURO (dark:text-white) */}
            <h1 className="text-4xl font-bold text-dark-blue dark:text-white mb-2">{espaco.nome}</h1>
            {/* Subtítulo: CLARO (text-gray-600) | ESCURO (dark:text-gray-400) */}
            <span className="text-gray-600 dark:text-gray-400 mb-6 block">{espaco.tipo} | Duração Máxima: {espaco.maxHoras} horas</span>

            {/* Container Principal: CLARO (bg-white) | ESCURO (dark:bg-header-blue) */}
            <div className="bg-white p-8 rounded-xl shadow-2xl dark:bg-header-blue grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Coluna 1: Calendário */}
                <div className="lg:col-span-2">
                    {/* Título da seção: CLARO (text-green-primary) | ESCURO (dark:text-green-primary) */}
                    <h2 className="text-2xl font-semibold mb-4 text-green-primary">1. Selecione a Data</h2>
                    {/* Fundo do Calendário: CLARO (bg-gray-50) | ESCURO (dark:bg-dark-blue) */}
                    <div className="p-4 bg-gray-50 dark:bg-dark-blue rounded-lg custom-day-picker">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={{ before: new Date() }}
                            locale={ptBR}
                            modifiersStyles={{
                                selected: { backgroundColor: '#48c459', color: '#1a2035' }
                            }}
                        />
                    </div>
                    {selectedDate && (
                        <p className="mt-4 text-dark-blue dark:text-white">
                            Data Selecionada: <span className="font-bold">{format(selectedDate, 'dd/MM/yyyy')}</span>
                        </p>
                    )}
                </div>

                {/* Coluna 2: Regras e Configuração da Reserva */}
                <div className="lg:col-span-1 border-l lg:pl-8 border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4 text-green-primary">2. Configurar Reserva</h2>

                    {/* Hora de Início */}
                    <div className="mb-4">
                        <label htmlFor="horaInicio" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Hora de Início:</label>
                        <input
                            type="time"
                            id="horaInicio"
                            value={horaInicio}
                            onChange={(e) => setHoraInicio(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:ring-green-primary focus:border-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    {/* Duração da Reserva */}
                    <div className="mb-6">
                        <label htmlFor="duracao" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Duração (Máximo {espaco.maxHoras}h):</label>
                        <input
                            type="number"
                            id="duracao"
                            min="1"
                            max={espaco.maxHoras}
                            value={duracao}
                            onChange={(e) => setDuracao(Math.min(Number(e.target.value), espaco.maxHoras))}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-400 rounded-lg text-dark-blue focus:ring-green-primary focus:border-green-primary dark:bg-dark-blue dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    {/* Regras e Complementos */}
                    {/* Fundo Regras: CLARO (bg-gray-50) | ESCURO (dark:bg-dark-blue) */}
                    <div className="p-4 bg-gray-50 dark:bg-dark-blue rounded-lg mb-6">
                        <h3 className="font-semibold text-dark-blue dark:text-white mb-2">Regras Principais</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 italic">{espaco.regras}</p>

                        {espaco.complementos.length > 0 && (
                            <div className="mt-4">
                                <h3 className="font-semibold text-dark-blue dark:text-white mb-2">Itens Inclusos (Quiosque)</h3>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                                    {espaco.complementos.map(c => (
                                        <li key={c.nome}>{c.quantidade} {c.nome}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Botão Finalizar Reserva */}
                    <button
                        onClick={handleReservar}
                        disabled={!selectedDate || !horaInicio}
                        className="w-full bg-green-primary text-dark-blue font-bold py-3 rounded-lg hover:bg-opacity-90 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg"
                    >
                        Avançar para Pagamento
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetalheEspaco;