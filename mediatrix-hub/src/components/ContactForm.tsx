import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateContactForm, submitContactForm } from '../store/apps/form';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contactForm, status, error } = useSelector((state: RootState) => state.form);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateContactForm({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitContactForm(contactForm));
  };

  return (
    <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto my-12 border border-[#4299e1]">
      <h2 className="text-2xl font-bold text-center text-white">Ready to Grow Your Mass Tort Practice?</h2>
      <p className="text-center text-gray-400 mt-2">Fill out the form below to learn more about our mass tort lead generation services.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block mb-2">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={contactForm.firstName}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={contactForm.lastName}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Email Address*</label>
          <input
            type="email"
            name="email"
            value={contactForm.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={contactForm.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Law Firm Name</label>
          <input
            type="text"
            name="lawFirm"
            value={contactForm.lawFirm}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2">Case Types of Interest</label>
          <input
            type="text"
            name="caseTypes"
            value={contactForm.caseTypes}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
          />
        </div>
        <div>
          <label className="block mb-2">Desired Lead Volume</label>
          <select
            name="leadVolume"
            value={contactForm.leadVolume}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
          >
            <option value="">Select lead volume</option>
            <option value="1-10">1-10 leads/month</option>
            <option value="11-50">11-50 leads/month</option>
            <option value="51+">51+ leads/month</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Additional Information</label>
          <textarea
            name="additionalInfo"
            value={contactForm.additionalInfo}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-[#2d3748] transition-colors"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {status === 'succeeded' && <p className="text-green-500 mt-4 text-center">Contact form submitted successfully!</p>}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default ContactForm;