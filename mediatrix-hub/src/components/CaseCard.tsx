import React, { useState } from 'react';
import QuoteForm from './QuoteForm';

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, description, image, link }) => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const quoteType = link.replace('/', '');

  return (
    <div className="bg-[#1c2331] rounded-lg shadow-lg border border-[#4299e1] flex flex-col h-full">
      <div className="w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 mt-2 flex-grow">{description}</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="text-blue-400 hover:underline"
          >
            Get Quote →
          </button>
        </div>
      </div>
      {isQuoteOpen && <QuoteForm quoteType={quoteType} onClose={() => setIsQuoteOpen(false)} />}
    </div>
  );
};

export default CaseCard;