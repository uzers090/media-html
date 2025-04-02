import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roundup from './pages/Roundup';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roundup" element={<Roundup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;