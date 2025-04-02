import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2">
      <h1 className="text-4xl font-bold">
        MediaTrix <span className="text-blue-400">Hub</span>
      </h1>
      <p className="mt-4 text-gray-300">
        We connect attorneys with pre-qualified plaintiffs for mass tort cases. Our exclusive leads are
        <br />verification-screened to maximize your ROI.
      </p>
      <div className="mt-6 flex space-x-4">
        <Link to="/" className="bg-black px-6 py-3 rounded-lg text-white">Home</Link>
        <Link to="/roundup" className="bg-black px-6 py-3 rounded-lg text-white">Roundup</Link>
      </div>
    </div>
  </div>
);

export default Header;