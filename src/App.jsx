// src/App.jsx - Atualizado

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Espacos from './pages/Espacos';         // <--- NOVO
import DetalheEspaco from './pages/DetalheEspaco'; // <--- NOVO

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rota principal para a lista de espaços */}
          <Route path="/espacos" element={<Espacos />} />

          {/* Rotas específicas que vêm do Home (links dos cards) */}
          <Route path="/espacos/quadras" element={<Espacos />} />
          <Route path="/espacos/salao" element={<Espacos />} />
          <Route path="/espacos/quiosques" element={<Espacos />} />

          {/* Rota de detalhe com o ID do espaço */}
          <Route path="/espacos/:id" element={<DetalheEspaco />} />

          {/* Adicione a rota de Finalização de Reserva (próximo passo) */}
          {/* <Route path="/reservar/:id" element={<ReservaFinal />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;