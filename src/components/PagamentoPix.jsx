// src/components/PagamentoPix.jsx
import React from 'react';

// Mock de dados que viriam da API do Backend (.NET)
const DADOS_PIX_MOCK = {
    cnpj: '00.000.000/0001-00',
    chavePix: 'condominio.reserva@pix.com.br',
    qrCodeUrl: 'https://via.placeholder.com/200x200?text=QR+Code+PIX', // Placeholder
    copiaECola: '00020126360014br.gov.bcb.pix01140000000000000000005204000053039865802BR5925CONDOMINIO RESERVA6007BRASIL62070503***6304E6CF' // Exemplo
};

const PagamentoPix = ({ valor }) => {
    return (
        <div className="bg-dark-blue p-6 rounded-lg shadow-inner border border-gray-700">
            <h3 className="text-2xl font-bold text-green-primary mb-4">Pagamento via PIX</h3>
            <p className="text-xl text-white mb-6">
                Valor Total: <span className="font-extrabold">R$ {valor.toFixed(2).replace('.', ',')}</span>
            </p>

            {/* Opção 1: QR Code */}
            <div className="mb-6 p-4 border border-gray-600 rounded-lg text-center">
                <h4 className="text-lg font-semibold text-white mb-3">1. PIX QR Code</h4>
                <img
                    src={DADOS_PIX_MOCK.qrCodeUrl}
                    alt="QR Code PIX"
                    className="mx-auto w-36 h-36 border border-gray-500 rounded-md"
                />
                <p className="mt-2 text-sm text-gray-400">Escaneie o QR Code com o app do seu banco.</p>
            </div>

            {/* Opção 2: PIX Copia e Cola */}
            <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">2. PIX Copia e Cola</h4>
                <div className="flex items-center">
                    <input
                        type="text"
                        readOnly
                        value={DADOS_PIX_MOCK.copiaECola}
                        className="flex-grow px-3 py-2 bg-header-blue border border-gray-600 rounded-l-lg text-sm text-gray-300 overflow-hidden"
                    />
                    <button
                        onClick={() => navigator.clipboard.writeText(DADOS_PIX_MOCK.copiaECola)}
                        className="bg-green-primary text-dark-blue font-semibold py-2 px-4 rounded-r-lg hover:bg-opacity-90 transition duration-200 text-sm"
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* Opção 3: Dados CNPJ */}
            <div>
                <h4 className="text-lg font-semibold text-white mb-3">3. Dados do Condomínio (PIX Manual)</h4>
                <p className="text-gray-300">
                    <span className="font-semibold">Chave PIX:</span> {DADOS_PIX_MOCK.chavePix}
                </p>
                <p className="text-gray-300">
                    <span className="font-semibold">CNPJ do Condomínio:</span> {DADOS_PIX_MOCK.cnpj}
                </p>
            </div>
        </div>
    );
};

export default PagamentoPix;