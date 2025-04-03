import React from 'react';

const WhyChooseUs: React.FC = () => (
  <section className="container mx-auto px-6 py-12 text-center bg-[#0a0f1c]">
    <h2 className="text-3xl font-bold text-white">Why Choose Our Mass Tort Leads</h2>
    <p className="mt-4 text-gray-400">
      Our lead generation process is designed to deliver quality plaintiffs that meet specific case criteria, helping you build stronger mass tort campaigns.
    </p>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] flex flex-col items-center">
        <span className="text-4xl mb-4">✅</span>
        <h3 className="text-xl font-semibold text-white">Quality Guaranteed</h3>
        <p className="text-gray-400 mt-2">
          All leads are pre-screened and verified to ensure they meet the specific criteria for each mass tort case type.
        </p>
      </div>
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] flex flex-col items-center">
        <span className="text-4xl mb-4">💰</span>
        <h3 className="text-xl font-semibold text-white">Higher Conversion Rates</h3>
        <p className="text-gray-400 mt-2">
          Our qualified leads convert at significantly higher rates than industry standards, maximizing your ROI.
        </p>
      </div>
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] flex flex-col items-center">
        <span className="text-4xl mb-4">⚖️</span>
        <h3 className="text-xl font-semibold text-white">Case-Specific Criteria</h3>
        <p className="text-gray-400 mt-2">
          We customize our screening process for each case type to ensure leads meet litigation requirements.
        </p>
      </div>
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] flex flex-col items-center">
        <span className="text-4xl mb-4">⏱️</span>
        <h3 className="text-xl font-semibold text-white">Fast Delivery</h3>
        <p className="text-gray-400 mt-2">
          Receive leads quickly through our streamlined delivery system with real-time notifications.
        </p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;