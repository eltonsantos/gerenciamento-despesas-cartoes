import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Despesas from './Despesas';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/users" element={<Funcionarios />} />
        <Route path="/cards" element={<Cartoes />} />
        <Route path="/categories" element={<Categorias />} />
        <Route path="/" exact element={<Despesas />} />
      </Routes>
    </Router>
  );
}

export default App;
