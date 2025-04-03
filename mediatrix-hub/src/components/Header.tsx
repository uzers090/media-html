import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isRoundup = location.pathname === '/roundup';

  return (
    <header className="bg-[#0a0f1c] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">
            MediaTrix<span className="text-white">Hub</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            We connect attorneys with pre-qualified plaintiffs for mass tort cases. Our exclusive leads are verification-screened to maximize your ROI.
          </p>
        </div>
        <nav className="flex space-x-4">
          <Link to="/">
            <button
              className={`px-4 py-2 rounded-lg text-white ${
                isHome ? 'bg-blue-500' : 'bg-black'
              } hover:bg-blue-600 transition-colors`}
            >
              Home
            </button>
          </Link>
          <Link to="/roundup">
            <button
              className={`px-4 py-2 rounded-lg text-white ${
                isRoundup ? 'bg-blue-500' : 'bg-black'
              } hover:bg-blue-600 transition-colors`}
            >
              Roundup
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;