import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DepoProvera: React.FC = () => (
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
        <h2 className="text-3xl font-bold mb-4">Depo Provera</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WLgwq4viRtw1LTtlzmPlYyVAZm_1jviQig&s"
          alt="Depo Provera"
          className="w-full h-50 object-cover rounded-t-lg"
        />
      </div>
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Depo Provera Information</h2>
      <div className="mt-8 grid place-items-center w-full">
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] text-left container mx-auto w-full m-12">
          <p className="text-gray-400 mt-2">
            The Depo-Provera mass tort litigation represents one of the most significant legal battles in recent history. Pfizer, the manufacturer of this widely used contraceptive injection, faces mounting lawsuits alleging that the drug's active ingredient, medroxyprogesterone acetate (a synthetic progestin hormone), causes meningiomas – potentially life-threatening brain tumors. Despite being marketed for decades as a safe and convenient birth control option administered quarterly, emerging evidence suggests Pfizer may have known about these serious risks yet failed to adequately warn American consumers.
            <br /><b><i>Current Litigation Status:</i></b>
            <br />As of March 2025, 78 Depo-Provera lawsuits have been consolidated into multidistrict litigation (MDL) in the Northern District of Florida under Judge Casey Rodgers. The litigation is moving at an unprecedented pace, with Judge Rodgers taking the somewhat unusual approach of immediately selecting five "pilot" cases to proceed through discovery and trial, essentially representing the overall MDL.
            <br />The discovery process for these pilot cases began on March 27, 2025, and is scheduled to continue through March 2026. The court has established an aggressive timeline, with defendants required to complete their document production on preemption and general causation by May 11, 2025. Preemption discovery will conclude by late July, with summary judgment motions expected by August 2025. Expert discovery on general causation will be completed by early 2026.
            <br /><b><i>Scientific Evidence and Health Concerns:</i></b>
            <br />Scientific research has consistently demonstrated a strong link between Depo-Provera and meningiomas. A March 2024 study published in the British Medical Journal reported that Depo-Provera users face a staggering 555% increased risk of developing meningiomas compared with non-users. These tumors form within the meninges, the protective layers surrounding the brain and spinal cord.
            <br />While often benign, meningiomas can cause severe symptoms as they press against brain structures, including:
            <br />Chronic headaches
            <br />Blurred or double vision
            <br />Seizures
            <br />Cognitive impairment
            <br />Neurological deficits
            <br />Treatment frequently requires invasive surgeries, such as craniotomies, followed by ongoing monitoring and, in many cases, results in permanent health challenges. The risk appears to increase with long-term use and higher cumulative doses of the drug.
            <br /><b><i>Legal Basis for Claims:</i></b>
            <br />The litigation centers on allegations that Pfizer knew about the dangers of Depo-Provera but failed to warn users or provide safer alternatives. Lawsuits claim that despite scientific evidence linking the drug to meningiomas, Pfizer:
            <br />Failed to provide adequate warnings about the increased risk of brain tumors
            <br />Updated warning labels in Europe and Canada but not in the United States
            <br />Continued to market the drug as safe despite knowing the risks
            <br />Failed to properly test the long-term effects of the medication
            <br />These cases generally proceed under legal theories including failure to warn, strict product liability, and negligence. Some plaintiffs also argue that Pfizer should be strictly liable under a defective design argument, particularly since the company already produces a safer alternative (Depo-SubQ Provera 104) with a lower dose of progestin.
            <br /><b><i>Compensation for Victims:</i></b>
            <br />King Law estimates potential settlement amounts in these cases to range between $150,000 and $500,000, though payouts may significantly exceed these figures depending on individual circumstances. The settlement range can be categorized as follows:
            <br />Low Settlement Range ($50,000-$200,000): Cases involving benign meningiomas requiring minimal treatment
            <br />Mid Settlement Range ($150,000-$500,000): Cases with atypical meningiomas necessitating surgery or radiation with moderate symptoms
            <br />High Settlement Range ($500,000-$2,000,000+): Severe cases involving malignant meningiomas, complex surgeries, ongoing medical care, or permanent disability
            <br />Compensation typically covers medical expenses, lost wages, pain and suffering, emotional distress, and loss of enjoyment of life.
            <br /><b><i>Who Qualifies for a Depo-Provera Lawsuit</i></b>
            <br />You may qualify to file a Depo-Provera lawsuit if:
            <br />You used brand-name Depo-Provera (Pfizer), brand-name depo-SubQ Provera (Pfizer), or an "authorized generic" version at least twice
            <br />You were diagnosed with meningioma or another brain tumor after using Depo-Provera
            <br />There is a reasonable connection between your Depo-Provera use and tumor development
            <br />Not everyone who took Depo-Provera will qualify. Exclusions include individuals who only used non-brand or unauthorized generic versions, used Depo-Provera fewer than two times, were diagnosed with meningioma prior to using the drug, or have pre-existing neurological conditions.
            <br /><b><i>Time is Limited to File Your Claim</i></b>
            <br />The statute of limitations for filing a Depo-Provera lawsuit varies by state, typically ranging from 1 to 6 years, with most states setting a 2-3 year limit from the date of meningioma diagnosis. The "discovery rule" may extend this timeline in cases where individuals were unaware of the connection between Depo-Provera and their meningioma.
            <br />Given these varying deadlines, it's crucial to consult with an experienced attorney as soon as possible to determine the applicable statute of limitations in your state and preserve your right to file a claim.
            <br />Our experienced mass tort attorneys can evaluate your case through a free, no-obligation consultation to determine if you qualify for compensation in this ongoing litigation.
            <br />Don't face this fight alone. Contact us today to learn how we can help you seek justice and the compensation you deserve.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default DepoProvera;