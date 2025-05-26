import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Table from './pages/Table';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="table" element={<Table />} />
    </Routes>
  );
}

export default App;
