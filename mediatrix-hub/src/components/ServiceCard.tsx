import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] flex flex-col items-center text-center">
    <span className="text-4xl mb-4">{icon}</span>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

export default ServiceCard;