import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PersonalInjury: React.FC = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <Header />
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Personal Injury Information</h2>
      <p className="mt-4 text-gray-400">
        Personal injury cases focus on harm due to negligence or misconduct. We generate qualified leads for your firm.
      </p>
    </div>
    <Footer />
  </div>
);

export default PersonalInjury;