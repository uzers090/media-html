import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { updateConsultationForm, submitConsultationForm } from '../store/apps/form';

const ConsultationForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { consultationForm, status, error } = useSelector((state: RootState) => state.form);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateConsultationForm({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitConsultationForm(consultationForm));
  };

  return (
    <div className="bg-[#1c2331] p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto my-12 border border-[#4299e1]">
      <h2 className="text-2xl font-bold text-center text-white">Request a Free Consultation</h2>
      <p className="text-center text-gray-400 mt-2">Fill out the form below to schedule a consultation with our team.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block mb-2">Name*</label>
          <input
            type="text"
            name="name"
            value={consultationForm.name}
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
            value={consultationForm.email}
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
            value={consultationForm.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Case Type*</label>
          <select
            name="caseType"
            value={consultationForm.caseType}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2d3748] border border-[#4a5568] text-gray-400"
            required
          >
            <option value="">Select a case type</option>
            <option value="Roundup">Roundup</option>
            <option value="Paraquat">Paraquat</option>
            <option value="AFFF">AFFF</option>
            <option value="Personal Injury">Personal Injury</option>
            <option value="Depo Provera">Depo Provera</option>
            <option value="NEC Baby Formula">NEC Baby Formula</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-[#2d3748] transition-colors"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Request Consultation'}
        </button>
      </form>
      {status === 'succeeded' && <p className="text-green-500 mt-4 text-center">Consultation request sent successfully!</p>}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default ConsultationForm;