import React from 'react';
import Header from '../components/Header';
import ConsultationForm from '../components/ConsultationForm';
import ServiceCard from '../components/ServiceCard';
import CaseCard from '../components/CaseCard';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => (
  <>
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <Header />
      <ConsultationForm />
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Our Lead Generation Services</h2>
      <p className="mt-4 text-gray-400">We provide law firms with high-quality, pre-screened mass tort leads to grow your practice and maximize your ROI.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard icon="📁" title="Pre-Screened Leads" description="All our leads are pre-qualified and screened to ensure they meet case criteria and have a valid legal claim." />
        <ServiceCard icon="👥" title="Signed Retainer Services" description="We utilize sophisticated targeting strategies to find potential plaintiffs for specific mass tort litigation." />
        <ServiceCard icon="✅" title="Intake Services" description="Our team verifies medical records, exposure history, and other case-specific criteria to ensure quality leads." />
      </div>
    </div>

    <section className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Mass Tort Case Types</h2>
      <p className="text-gray-400 mt-2">We specialize in generating high-quality leads for these active mass tort litigations.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <CaseCard
          title="Roundup"
          description="Roundup's active ingredient, glyphosate, is linked to causing non-Hodgkin's lymphoma (NHL) and numerous other cancers."
          image="https://cdn11.bigcommerce.com/s-qz13ep5fb4/images/stencil/1280x1280/products/78607/225472/f466d0a2-7884-4e3f-a4a4-0bfc3583c626__29964.1674882813.jpg?c=1"
          link="/roundup"
        />
        {/* Add other case cards here as needed */}
      </div>
    </section>

    <WhyChooseUs />
    <FAQ />
    <ContactForm />
  </>
);

export default Home;