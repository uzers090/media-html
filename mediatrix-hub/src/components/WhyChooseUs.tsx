import React from 'react';

interface WhyChooseItem {
  icon: string;
  title: string;
  desc: string;
}

const WhyChooseUs: React.FC = () => {
  const items: WhyChooseItem[] = [
    { icon: '🛡️', title: 'Quality Guaranteed', desc: 'All leads are pre-screened and verified to ensure they meet the specific criteria for each mass tort case type.' },
    { icon: '💰', title: 'Higher Conversion Rates', desc: 'Our qualified leads convert at significantly higher rates than industry standards, maximizing your ROI.' },
    { icon: '⚖️', title: 'Case-Specific Criteria', desc: 'We customize our screening process for each case type to ensure leads meet litigation requirements.' },
    { icon: '⏳', title: 'Fast Delivery', desc: 'Receive leads quickly through our streamlined delivery system with real-time notifications.' },
    { icon: '🎖️', title: 'Exclusive Leads', desc: 'Our leads are sold exclusively to you, not shared with multiple law firms, giving you a competitive edge.' },
    { icon: '📈', title: 'Detailed Analytics', desc: 'Track your campaign performance with comprehensive reporting and conversion analytics.' },
  ];

  return (
    <section className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Our Process</h2>
      <h2>Why Choose Our Mass Tort Leads</h2>
      <p>Our lead generation process is designed to deliver quality plaintiffs that meet specific case criteria, helping you build stronger mass tort campaigns.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <span className="text-4xl text-blue-400 mb-4 block">{item.icon}</span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;