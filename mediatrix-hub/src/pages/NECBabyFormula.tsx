import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NECBabyFormula: React.FC = () => (
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
        <h2 className="text-3xl font-bold mb-4">NEC Baby Formula</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9NNZf8Ax9Dq-V9RDiYMHMLycjiNmsvvuvg&s"
          alt="NEC Baby Formula"
          className="w-full h-50 object-cover rounded-t-lg"
        />
      </div>
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">NEC Baby Formula Information</h2>
      <div className="mt-8 grid place-items-center w-full">
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] text-left container mx-auto w-full m-12">
          <p className="text-gray-400 mt-2">
            The NEC baby formula mass tort litigation represents one of the most significant legal battles in recent history, involving major manufacturers of cow's milk-based infant formula products like Similac (Abbott Laboratories) and Enfamil (Mead Johnson). This litigation centers around allegations that these formulas significantly increase the risk of necrotizing enterocolitis (NEC) in premature and low-birth-weight infants. NEC is a devastating intestinal disease that causes tissue to become inflamed, decay, and die, creating perforations that allow bacteria to leak into the abdomen and cause life-threatening infections.
            <br /><b><i>Current Litigation Status</i></b>
            <br />As of April 2025, over 663 active NEC baby formula lawsuits have been consolidated in multidistrict litigation (MDL) in the U.S. District Court for the Northern District of Illinois. The litigation continues to gain momentum with new cases being filed monthly. Recent developments have been devastating for formula manufacturers, with a Missouri jury awarding a staggering $495 million verdict against Abbott Laboratories in July 2024 ($90 million in compensatory damages and $400 million in punitive damages). This followed a $60 million verdict against Mead Johnson in March 2024.
            <br />Most significantly, in April 2025, a Missouri judge threw out the manufacturers' only defense verdict, ruling that lawyers for Abbott and Mead Johnson deliberately misled jurors and violated court orders. The first bellwether trial in the federal MDL is scheduled to begin on May 5, 2025, which will be a crucial test case that may influence future settlements.
            <br /><b><i>Scientific Evidence and Health Concerns</i></b>
            <br />Scientific research has consistently demonstrated that premature babies who consume cow's milk-based formula face a significantly higher risk of developing NEC compared to infants nourished with breast milk. The mortality rate for babies who develop NEC is estimated to be around 40%, making it the leading cause of overall infant mortality in the U.S.
            <br />For infants who survive NEC, approximately 50% will develop long-term health complications, including:
            <br />Brain injuries (like cerebral palsy or bleeding in the brain)
            <br />Hypoxic ischemic encephalopathy (HIE)
            <br />Sepsis
            <br />Short bowel syndrome
            <br />Neurological damage requiring lifelong care
            <br />Intestinal strictures
            <br />Malabsorption syndromes
            <br />Growth failure
            <br /><b><i>Legal Basis for Claims:</i></b>
            <br />The litigation centers on allegations that manufacturers knew about the dangers of cow's milk-based formula for premature infants but failed to warn users or provide safer alternatives. Lawsuits claim that despite decades of scientific evidence, companies like Abbott and Mead Johnson:
            <br />Failed to provide adequate warnings about the increased risk of NEC
            <br />Aggressively marketed their products as medically endorsed and safe
            <br />Used deceptive tactics to imply their products were similar to or derived from breast milk
            <br />Targeted their marketing specifically to parents of premature infants
            <br />Prioritized profits over the safety of vulnerable newborns
            <br />These cases generally proceed as product liability claims, alleging defective design, defective manufacturing, or defective labeling of the formula products. Some cases also include medical malpractice claims against healthcare providers who prescribed these formulas without warning of the risks.
            <br /><b><i>Compensation for Victims</i></b>
            <br />The devastating nature of NEC and its life-altering or fatal consequences have led to substantial verdicts for affected families. Compensation in these cases typically covers:
            <br />Medical expenses and treatments
            <br />Surgery costs
            <br />Hospital stays
            <br />Medication
            <br />Long-term care needs
            <br />Lost wages for caregivers
            <br />Pain and suffering
            <br />Emotional distress
            <br />Loss of enjoyment of life
            <br />Wrongful death and funeral expenses when applicable
            <br />Recent verdicts, including the $495 million and $60 million judgments, suggest that significant compensation may be available for families with qualifying claims.
            <br /><b><i>Who Qualifies for an NEC Baby Formula Lawsuit</i></b>
            <br />You may qualify to file an NEC baby formula lawsuit if:
            <br />Your child was born prematurely (before 37 weeks) or with low birth weight
            <br />Your child consumed formula that contained cow's milk protein (such as Similac or Enfamil)
            <br />Your child was diagnosed with necrotizing enterocolitis (NEC)
            <br />Even if you're unsure about the specific formula your child received in the hospital, an attorney may be able to help you obtain this information. Parents are encouraged to keep any receipts, packaging, or proof of purchase as potential evidence.
            <br /><b><i>Time is Limited to File Your Claim</i></b>
            <br />Each state has its own statute of limitations that dictates how long you have to file an NEC baby formula lawsuit:
            <br />Some states allow up to six years to file a claim
            <br />Others, like Florida, impose a two-year limit from date of injury or discovery
            <br />The "discovery rule" may extend this timeline in cases where parents were unaware of the connection between the formula and NEC
            <br />Children may have extended timeframes in some states (for example, until age 8 in Florida for medical malpractice claims)
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

export default NECBabyFormula;