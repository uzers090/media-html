import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NECBabyFormula: React.FC = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <Header />
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">NEC Baby Formula Information</h2>
      <p className="mt-4 text-gray-400">
        NEC baby formula litigation involves Similac and Enfamil, linked to a devastating intestinal disease.
      </p>
    </div>
    <Footer />
  </div>
);

export default NECBabyFormula;