import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateContactForm, submitContactForm } from '../store/apps/form';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contactForm, status, error } = useSelector((state: RootState) => state.form);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateContactForm({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitContactForm(contactForm));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto my-12">
      <h2 className="text-2xl font-bold text-center">Ready to Grow Your Mass Tort Practice?</h2>
      <p className="text-center text-gray-400">Fill out the form below to learn more about our mass tort lead generation services.</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block mb-2">First Name*</label>
        <input
          type="text"
          name="firstName"
          value={contactForm.firstName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <label className="block mt-3 mb-2">Last Name*</label>
        <input
          type="text"
          name="lastName"
          value={contactForm.lastName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <label className="block mt-3 mb-2">Email Address*</label>
        <input
          type="email"
          name="email"
          value={contactForm.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <label className="block mt-3 mb-2">Phone Number*</label>
        <input
          type="tel"
          name="phone"
          value={contactForm.phone}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <label className="block mt-3 mb-2">Law Firm Name*</label>
        <input
          type="text"
          name="lawFirm"
          value={contactForm.lawFirm}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <label className="block mt-3 mb-2">Case Types of Interest*</label>
        <input
          type="text"
          name="caseTypes"
          value={contactForm.caseTypes}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          required
        />
        <label className="block mt-3 mb-2">Monthly Lead Volume Needed</label>
        <input
          type="text"
          name="leadVolume"
          value={contactForm.leadVolume}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <label className="block mt-3 mb-2">Additional Information</label>
        <textarea
          name="additionalInfo"
          value={contactForm.additionalInfo}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          rows={3}
        ></textarea>
        <button
          type="submit"
          className="w-full mt-4 p-3 bg-black rounded-lg text-white hover:bg-gray-700"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {status === 'succeeded' && <p className="text-green-500 mt-2">Form submitted successfully!</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ContactForm;