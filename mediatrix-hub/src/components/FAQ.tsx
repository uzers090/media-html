import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: 'How are your mass tort leads generated?', answer: 'Our leads are generated through a multi-channel approach including digital marketing, TV advertising, social media campaigns, and strategic partnerships.' },
    { question: 'What makes your leads better than other providers?', answer: 'Our leads go through a rigorous verification process to ensure they meet quality standards and are exclusive to our clients.' },
    { question: 'How quickly can I expect to receive leads after signing up?', answer: 'Leads are delivered in real-time, allowing you to start working with potential clients immediately.' },
  ];

  return (
    <section className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <p className="text-gray-400 mt-2">Have questions? We have answers! Check out our FAQs below.</p>
      <div className="max-w-2xl mx-auto mt-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1c2333] rounded-lg p-4 mb-4 cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center font-bold">
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <p className="mt-2 text-gray-400">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;