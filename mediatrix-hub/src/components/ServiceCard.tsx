import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-900 text-left">
    <span className="text-blue-400 text-3xl">{icon}</span>
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

export default ServiceCard;