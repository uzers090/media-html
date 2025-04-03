import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Paraquat: React.FC = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <Header />
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Paraquat Information</h2>
      <p className="mt-4 text-gray-400">
        Paraquat mass tort litigation involves manufacturers like Syngenta, Chevron, and FMC. Learn more about how we can help.
      </p>
    </div>
    <Footer />
  </div>
);

export default Paraquat;