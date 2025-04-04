import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PersonalInjury: React.FC = () => (
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
        <h2 className="text-3xl font-bold mb-4">Personal Injury</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNFMRP1plISADD9V4Kp5HZXmZeBuEcy9msA&s"
          alt="Personal Injury"
          className="w-full h-50 object-cover rounded-t-lg"
        />
      </div>
    </div>

    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Personal Injury Information</h2>
      <div className="mt-8 grid place-items-center w-full">
      <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg border border-[#4299e1] text-left container mx-auto w-full m-12">
          <p className="text-gray-400 mt-2">
            Personal injury litigation represents one of the most common types of legal claims, occurring when an individual suffers harm to their body, mind, or emotions due to another party's negligence, recklessness, or intentional misconduct. Unlike property damage claims, personal injury focuses on physical and psychological harm to a person. These cases aim to compensate victims for their losses and restore them to the position they would have been in had the injury never occurred.
            <br /><b><i>Common Types of Personal Injury Cases:</i></b>
            <br />Personal injury claims encompass a wide variety of situations where one party causes harm to another. The most prevalent types include:
            <br />Car accidents, which represent the largest category of personal injury claims nationwide
            <br />Slip and fall cases, falling under premises liability when property owners fail to maintain safe conditions
            <br />Medical malpractice, when healthcare professionals provide substandard care resulting in injury
            <br />Product liability, involving injuries from defective or dangerous consumer products
            <br />Workplace accidents that occur due to unsafe working conditions
            <br />Motorcycle and bicycle accidents, which often result in severe injuries
            <br />Dog bites and animal attacks
            <br />Pedestrian accidents
            <br />Assault, battery, and other intentional torts
            <br />Wrongful death claims when negligence results in a fatal outcome
            <br /><b><i>Legal Basis for Claims:</i></b>
            <br />The foundation of most personal injury claims is negligence, which requires establishing four key elements:
            <br />Duty of care: The defendant had a legal obligation to act reasonably under the circumstances
            <br />Breach of duty: The defendant failed to uphold that duty
            <br />Causation: This breach directly caused the plaintiff's injuries
            <br />Damages: The plaintiff suffered actual harm as a result
            <br /><b><i>Some cases may proceed under different legal theories:</i></b>
            <br />Strict liability (particularly in product liability cases), where defendants are held responsible regardless of intent
            <br />Intentional wrongdoing, such as in cases of assault or battery
            <br />Defamation, when false statements harm someone's reputation
            <br /><b><i>Compensation for Victims</i></b>
            <br />Personal injury damages fall into three main categories:
            <br /><b><i>1. Special damages (economic damages):</i></b>
            <br />Medical expenses (past and future)
            <br />Lost wages and diminished earning capacity
            <br />Property damage
            <br />Rehabilitation costs
            <br />Travel expenses for medical appointments
            <br />Prescription costs
            <br /><b><i>2. General damages (non-economic damages):</i></b>
            <br />Pain and suffering
            <br />Emotional distress
            <br />Loss of enjoyment of life
            <br />Loss of consortium (impact on relationships)
            <br />Mental anguish
            <br />Permanent disability or disfigurement
            <br /><b><i>3. Punitive damages (in cases of extreme negligence or intentional harm):</i></b>
            <br />Awarded to punish particularly egregious conduct
            <br />Meant to deter similar behavior in the future
            <br />The total amount awarded varies significantly based on injury severity, with compensation ranging from thousands to millions of dollars. As a reference point, a typical personal injury claim involving $5,000 in medical bills and $7,500 in lost income (total special damages of $12,500) might reasonably include $10,000-$15,000 in pain and suffering, bringing the total claim value to $22,500-$27,500.
            <br /><b><i>Litigation Process</i></b>
            <br />Personal injury cases follow a structured process:
            <br />Filing a complaint that identifies parties, specifies wrongdoing, alleges causation, and requests compensation
            <br />Discovery phase where evidence is gathered through document requests, depositions, and expert testimony
            <br />Negotiations between parties, often resulting in settlement before trial
            <br />Trial proceedings if settlement cannot be reached
            <br />Potential appeals following trial
            <br />Most personal injury cases settle before reaching trial, with compensation typically paid as either a lump sum or structured settlement over time.
            <br /><b><i>Time Limitations for Filing Claims</i></b>
            <br />Statutes of limitations for personal injury claims vary by state and by case type:
            <br />Most states allow 1-3 years from the date of injury to file a claim
            <br />Some states extend this period for certain types of injuries
            <br />The "discovery rule" may apply when injuries are not immediately apparent
            <br />Claims against government entities often have shorter filing deadlines
            <br />Personal injury law aims to make victims whole again after suffering harm caused by others, providing both compensation for tangible losses and recognition of the intangible suffering that accompanies serious injuries.
            <br />Don't face this fight alone. Contact us today to learn how we can help you seek justice and the compensation you deserve.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PersonalInjury;