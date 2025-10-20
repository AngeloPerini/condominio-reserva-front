// src/pages/ReservaFinal.jsx
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PagamentoPix from '../components/PagamentoPix';
import { format } from 'date-fns';

const VALOR_MOCK = 50.00; // Simula o valor calculado pelo backend

const ReservaFinal = () => {
    const { id } = useParams();
    const location = useLocation();
    const { date, start, duration } = location.state || {}; // Dados passados do DetalheEspaco

    // Mock de dados para exibição
    const nomeEspaco = "Campo de Futebol"; // Viria da API

    const [comprovante, setComprovante] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setComprovante(e.target.files[0]);
    };

    const handleFinalizar = (e) => {
        e.preventDefault();
        if (!comprovante) {
            alert('Por favor, anexe o comprovante de pagamento PIX.');
            return;
        }

        setLoading(true);
        // Lógica futura: Enviar comprovante e dados da reserva para a API
        console.log('Finalizando Reserva...', {
            espacoId: id,
            data: date,
            inicio: start,
            duracao: duration,
            comprovante: comprovante.name,
        });

        // Simulação de envio
        setTimeout(() => {
            alert('Reserva enviada para confirmação! Aguarde a aprovação do administrador.');
            setLoading(false);
            // Redirecionar para o Dashboard do Morador
            // navigate('/dashboard'); 
        }, 3000);
    };

    if (!date || !start) {
        return <div className="text-white text-center py-12">Erro: Dados da reserva não encontrados. Volte e selecione a data.</div>;
    }

    return (
        <div className="py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">3. Confirmação e Pagamento</h1>

            <div className="bg-header-blue p-8 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Coluna 1: Resumo da Reserva */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-green-primary">Resumo da Reserva</h2>
                    <div className="text-lg text-white space-y-3 p-4 bg-dark-blue rounded-lg">
                        <p><span className="font-bold">Espaço:</span> {nomeEspaco}</p>
                        <p><span className="font-bold">Data:</span> {format(date, 'dd/MM/yyyy')}</p>
                        <p><span className="font-bold">Início:</span> {start}</p>
                        <p><span className="font-bold">Duração:</span> {duration} horas</p>
                        <p><span className="font-bold text-xl">Valor a Pagar:</span> <span className="text-yellow-400 font-extrabold text-xl">R$ {VALOR_MOCK.toFixed(2).replace('.', ',')}</span></p>
                    </div>
                </div>

                {/* Coluna 2: Pagamento e Comprovante */}
                <div>
                    <PagamentoPix valor={VALOR_MOCK} />

                    <form onSubmit={handleFinalizar} className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-green-primary">Anexar Comprovante</h2>

                        <div className="mb-4">
                            <label htmlFor="comprovante" className="block text-sm font-medium text-gray-300 mb-1">
                                Comprovante de Pagamento PIX (Obrigatório)
                            </label>
                            <input
                                type="file"
                                id="comprovante"
                                accept="image/*,.pdf"
                                onChange={handleFileChange}
                                required
                                className="w-full text-white bg-dark-blue border border-gray-600 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-primary file:text-dark-blue hover:file:bg-opacity-80"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading || !comprovante}
                            className="w-full bg-green-primary text-dark-blue font-bold py-3 rounded-lg hover:bg-opacity-90 transition duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed shadow-lg"
                        >
                            {loading ? 'Enviando...' : 'Confirmar Reserva e Anexar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReservaFinal;