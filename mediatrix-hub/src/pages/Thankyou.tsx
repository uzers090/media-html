import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou: React.FC = () => (
  <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
    <Header />
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-white">Thank You!</h2>
      <p className="mt-4 text-gray-400">Our team will get back to you soon.</p>
    </div>
    <Footer />
  </div>
);

export default ThankYou;