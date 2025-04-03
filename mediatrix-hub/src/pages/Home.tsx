import React from 'react';
import Header from '../components/Header';
import ConsultationForm from '../components/ConsultationForm';
import ServiceCard from '../components/ServiceCard';
import CaseCard from '../components/CaseCard';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <>
    <Header />
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <ConsultationForm />
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Our Lead Generation Services</h2>
      <p className="mt-4 text-gray-400">We provide law firms with high-quality, pre-screened mass tort leads to grow your practice and maximize your ROI.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          icon="📁"
          title="Pre-Screened Leads"
          description="All our leads are pre-qualified and screened to ensure they meet case criteria and have a valid legal claim."
        />
        <ServiceCard
          icon="👥"
          title="Signed Retainer Services"
          description="We utilize sophisticated targeting strategies to find potential plaintiffs for specific mass tort litigation."
        />
        <ServiceCard
          icon="✅"
          title="Intake Services"
          description="Our team verifies medical records, exposure history, and other case-specific criteria to ensure quality leads."
        />
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
        <CaseCard
          title="Paraquat"
          description="Paraquat mass tort litigation represents one of the most significant legal battles in recent history, involving manufacturers like Syngenta, Chevron, and FMC."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2Of-kZTQfUglIA_2BC_mCTureDDh4R5DMQ&s/400"
          link="/paraquat"
        />
        <CaseCard
          title="AFFF"
          description="The AFFF (Aqueous Film-Forming Foam), a specialized firefighting foam used to suppress flammable liquid fires, contains toxic PFAS 'forever chemicals' that cause cancer and other serious health conditions."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4wcPHaCGykaWN_Ecu9sBEmJCuZT4LDxchyAKbR1-fzQh1om3hVJmAP4u2H4oK9ioNk0&usqp=CAU/400"
          link="/afff"
        />
        <CaseCard
          title="Personal Injury"
          description="Personal injury litigation represents one of the most common types of legal claims, occurring when an individual suffers harm to their body, mind, or emotions due to another party's negligence, recklessness, or intentional misconduct. Unlike property damage claims, personal injury focuses on physical and psychological harm to a person."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNFMRP1plISADD9V4Kp5HZXmZeBuEcy9msA&s/400"
          link="/personal-injury"
        />
        <CaseCard
          title="Depo Provera"
          description="The Depo-Provera mass tort litigation represents one of the most significant legal battles in recent history. Pfizer, the manufacturer of this widely used contraceptive injection, faces mounting lawsuits alleging that the drug's active ingredient, medroxyprogesterone acetate (a synthetic progestin hormone), causes meningiomas – potentially life-threatening brain tumors. Despite being marketed for decades as a safe and convenient birth control option administered quarterly, emerging evidence suggests Pfizer may have known about these serious risks yet failed to adequately warn American consumers."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WLgwq4viRtw1LTtlzmPlYyVAZm_1jviQig&s/400"
          link="/depo-provera"
        />
        <CaseCard
          title="NEC Baby Formula"
          description="The NEC baby formula mass tort litigation represents one of the most significant legal battles in recent history, involving major manufacturers of cow's milk-based infant formula products like Similac (Abbott Laboratories) and Enfamil (Mead Johnson). NEC is a devastating intestinal disease that causes tissue to become inflamed, decay, and die, creating perforations that allow bacteria to leak into the abdomen and cause life-threatening infections."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9NNZf8Ax9Dq-V9RDiYMHMLycjiNmsvvuvg&s/400"
          link="/nec-baby-formula"
        />
      </div>
    </section>

    <WhyChooseUs />
    <FAQ />
    <ContactForm />
    <Footer />
  </>
);

export default Home;