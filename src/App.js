import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FreshFoldHome from './FreshFoldHome';
import Services from './Services';
import Pricing from './Pricing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FreshFoldHome />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
