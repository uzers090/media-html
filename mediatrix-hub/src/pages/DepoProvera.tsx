import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DepoProvera: React.FC = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <Header />
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Depo Provera Information</h2>
      <p className="mt-4 text-gray-400">
        Depo Provera litigation involves Pfizer and allegations of meningiomas. We provide pre-screened leads.
      </p>
    </div>
    <Footer />
  </div>
);

export default DepoProvera;