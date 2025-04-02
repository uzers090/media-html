import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#0a0f1c] p-8 text-left">
    <h2>MediaTrix<span className="text-white">Hub</span></h2>
    <p className="text-gray-400">Connecting attorneys with qualified mass tort leads for successful litigation campaigns.</p>
    <div className="mt-6">
      <h3>Contact</h3>
      <p>Email: [email]</p>
      <p>Phone: [phone]</p>
      <p>Address: [address]</p>
    </div>
    <div className="mt-6 border-t border-gray-800 pt-4 text-center text-gray-600">
      © 2025 MediaTrix Hub. All rights reserved.
    </div>
  </footer>
);

export default Footer;