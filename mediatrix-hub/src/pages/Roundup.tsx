import React from 'react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Roundup: React.FC = () => (
  <>
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <Header />
      <div className="md:w-1/2 mt-10 md:mt-0 bg-[#1c2331] p-8 rounded-lg shadow-lg border border-blue-500 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Roundup</h2>
        <img
          src="https://cdn11.bigcommerce.com/s-qz13ep5fb4/images/stencil/1280x1280/products/78607/225472/f466d0a2-7884-4e3f-a4a4-0bfc3583c626__29964.1674882813.jpg?c=1"
          alt="Roundup"
          className="w-full h-50 object-cover rounded-t-lg"
        />
      </div>
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">RoundUp Information</h2>
      <p className="mt-4 text-gray-400">We provide law firms with high-quality, pre-screened mass tort leads to grow your practice and maximize your ROI.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard icon="📁" title="Pre-Screened Leads" description="All our leads are pre-qualified and screened to ensure they meet case criteria and have a valid legal claim." />
        <ServiceCard icon="👥" title="Signed Retainer Services" description="We utilize sophisticated targeting strategies to find potential plaintiffs for specific mass tort litigation." />
        <ServiceCard icon="✅" title="Intake Services" description="Our team verifies medical records, exposure history, and other case-specific criteria to ensure quality leads." />
      </div>
    </div>
  </>
);

export default Roundup;