import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
    <div className="bg-[#1c2331] rounded-lg shadow-lg border border-[#4299e1] flex flex-col h-auto">
      {/* Wrap the card content (except the button) in a Link to navigate to the case page */}
      <Link to={link} className="flex flex-col flex-grow">
        <div className="w-full h-48 overflow-hidden">
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
          <p className="text-gray-400 mt-2 flex-grow overflow-auto">{description}</p>
        </div>
      </Link>
      {/* Separate the "Get Quote" button from the Link to prevent navigation when clicking it */}
      <div className="p-6 pt-0 text-center">
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent the Link navigation
            setIsQuoteOpen(true); // Open the quote form modal
          }}
          className="text-blue-400 hover:underline py-2"
        >
          Get Quote →
        </button>
      </div>
      {isQuoteOpen && <QuoteForm quoteType={quoteType} onClose={() => setIsQuoteOpen(false)} />}
    </div>
  );
};

export default CaseCard;