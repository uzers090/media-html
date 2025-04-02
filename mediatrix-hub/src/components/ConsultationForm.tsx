import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateConsultationForm, submitConsultationForm } from '../store/apps/form';

const ConsultationForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { consultationForm, status, error } = useSelector((state: RootState) => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(updateConsultationForm({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitConsultationForm(consultationForm));
  };

  return (
    <div className="md:w-1/2 mt-10 md:mt-0 bg-[#1c2331] p-8 rounded-lg shadow-lg border border-blue-500 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Get Your Free Consultation</h2>
      <h2 className="text-xl font-semibold mb-4">Request Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={consultationForm.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={consultationForm.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={consultationForm.phone}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded"
          required
        />
        <select
          name="caseType"
          value={consultationForm.caseType}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded"
        >
          <option value="">Case Type of Interest</option>
          <option value="Personal Injury">Personal Injury</option>
          <option value="Medical Malpractice">Medical Malpractice</option>
          <option value="Defective Drugs">Defective Drugs</option>
        </select>
        <button
          type="submit"
          className="w-full bg-black p-3 rounded-lg text-white"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Contact Me'}
        </button>
      </form>
      {status === 'succeeded' && <p className="text-green-500 mt-2">Form submitted successfully!</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default ConsultationForm;