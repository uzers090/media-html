import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#0a0f1c] p-8 text-left border-t border-gray-800">
    <div>
      <h2 className="text-xl font-bold">
        MediaTrix<span className="text-white">Hub</span>
      </h2>
      <p className="text-gray-400 mt-2">
        Connecting attorneys with qualified mass tort leads for successful litigation campaigns.
      </p>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold">Contact</h3>
      <p className="text-gray-400">Email: info@mediatrixhub.com</p>
      <p className="text-gray-400">Phone: (123) 456-7890</p>
      <p className="text-gray-400">Address: 123 Legal St, Suite 100, Lawville, LV 12345</p>
    </div>
    <div className="mt-6 text-center text-gray-600">
      © 2025 MediaTrix Hub. All rights reserved.
    </div>
  </footer>
);

export default Footer;