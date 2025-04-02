import React from 'react';
import { Link } from 'react-router-dom';

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, description, image, link }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <Link to={link} className="text-blue-400 hover:underline mt-4 block">Get Quote →</Link>
    </div>
  </div>
);

export default CaseCard;