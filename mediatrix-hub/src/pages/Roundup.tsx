import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Roundup: React.FC = () => (
  <div className="bg-gray-900 text-white min-h-screen">
    <Header />
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold">
          MediaTrix <span className="text-blue-400">Hub</span>
        </h1>
        <p className="mt-4 text-gray-300">
          We connect attorneys with pre-qualified plaintiffs for mass tort cases. Our exclusive leads are verification-screened to maximize your ROI.
        </p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 bg-[#1c2331] p-8 rounded-lg shadow-lg border border-blue-500 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Roundup</h2>
        <img
          src="https://cdn11.bigcommerce.com/s-qz13ep5fb4/images/stencil/1280x1280/products/78607/225472/f466d0a2-7884-4e3f-a4a4-0bfc3583c626__29964.1674882813.jpg?c=1"
          alt="Roundup"
          className="w-full h-50 object-cover rounded-t-lg"
        />
      </div>
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Roundup Information</h2>
      <div className="mt-8 grid place-items-center  w-full">
        <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] text-left container mx-auto w-full m-12">
          <div className="w-full">
            <p className="text-gray-400 w-full">
              The Roundup mass tort litigation represents one of the most significant legal battles in recent history. Bayer, which acquired Monsanto in 2018, continues to face unprecedented legal challenges over allegations that Roundup's active ingredient, glyphosate, causes non-Hodgkin's lymphoma (NHL) and numerous other cancers. The World Health Organization has classified glyphosate as "probably carcinogenic to humans", lending scientific credibility to thousands of claims.
              <br /><b><i>Current Litigation Status</i></b>
              <br />As of March 2025, despite Bayer's $10+ billion settlement to resolve approximately 100,000 previous cases, the company still faces over 60,000 active lawsuits nationwide. Recent developments have been devastating for Bayer, with a Georgia jury awarding a staggering $2.1 billion verdict in March 2025 - including $65 million in compensatory damages and $2 billion in punitive damages. This follows other recent multi-million dollar verdicts, including a $2.25 billion verdict in January 2024.
              <br /><b><i>Scientific Evidence and Health Concerns</i></b>
              <br />Plaintiffs in Roundup lawsuits allege that prolonged exposure to glyphosate significantly increases the risk of developing various cancers. Beyond non-Hodgkin's lymphoma, lawsuits cite connections to numerous related cancers including:
              <br />B-cell lymphoma
              <br />Diffuse large B-cell lymphoma
              <br />Follicular lymphoma
              <br />Chronic lymphocytic leukemia
              <br />Multiple myeloma
              <br />Mantle cell lymphoma
              <br /><b><i>Legal Basis for Claims</i></b>
              <br />The litigation centers on allegations that Monsanto/Bayer failed to warn consumers about the potential cancer risks associated with Roundup despite allegedly having knowledge of these dangers. Internal documents uncovered during litigation suggest the company may have ghostwritten scientific studies and engaged in deceptive practices to hide these risks from consumers.
              <br /><b><i>Compensation for Victims</i></b>
              <br />If you or a loved one developed non-Hodgkin's lymphoma or another related cancer after Roundup exposure, you may be entitled to substantial compensation for:
              <br />Medical expenses and treatments
              <br />Lost wages and diminished earning capacity
              <br />Pain and suffering
              <br />Emotional distress
              <br />Loss of enjoyment of life
              <br />Courts have consistently awarded significant punitive damages against Bayer/Monsanto, reflecting the seriousness of the allegations and the company's conduct.
              <br /><b><i>Time is Limited to File Your Claim</i></b>
              <br />State statutes of limitations restrict how long you have to file your claim after diagnosis. Our experienced mass tort attorneys can evaluate your case through a free, no-obligation consultation to determine if you qualify for compensation in this ongoing litigation.
              <br />Don't face this fight alone. Contact us today to learn how we can help you seek justice and the compensation you deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Roundup;