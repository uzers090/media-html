import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store';
import { updateQuoteForm, submitQuoteForm, resetQuoteForm } from '../store/apps/form';
import caseInfo from '../data/caseInfo.json';

interface QuoteFormProps {
  quoteType: string;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ quoteType, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { quoteForm, status, error } = useSelector((state: RootState) => state.form);

  React.useEffect(() => {
    dispatch(updateQuoteForm({ quoteType }));
  }, [dispatch, quoteType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateQuoteForm({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitQuoteForm(quoteForm)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        dispatch(resetQuoteForm());
        onClose();
        navigate('/thank-you');
      }
    });
  };

  const caseData = caseInfo[quoteType as keyof typeof caseInfo] || {
    title: `Get a Quote Now for ${quoteType || 'Your Case'}`,
    description: 'Please fill out the form below to request a quote for your case.',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1c2331] p-8 rounded-lg shadow-lg w-full max-w-md border border-[#4299e1]">
        <h2 className="text-2xl font-bold text-white text-center mb-4">{caseData.title}</h2>
        <p className="text-gray-400 text-center mb-6">{caseData.description}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400">First Name</label>
            <input
              type="text"
              name="firstName"
              value={quoteForm.firstName}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-[#4a5568] rounded-md bg-[#2d3748] text-gray-300 placeholder-gray-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={quoteForm.lastName}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-[#4a5568] rounded-md bg-[#2d3748] text-gray-300 placeholder-gray-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Email Address</label>
            <input
              type="email"
              name="email"
              value={quoteForm.email}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-[#4a5568] rounded-md bg-[#2d3748] text-gray-300 placeholder-gray-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Phone</label>
            <input
              type="tel"
              name="phone"
              value={quoteForm.phone}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-[#4a5568] rounded-md bg-[#2d3748] text-gray-300 placeholder-gray-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Order Details</label>
            <textarea
              name="orderDetails"
              value={quoteForm.orderDetails}
              onChange={handleChange}
              className="mt-1 p-3 w-full border border-[#4a5568] rounded-md bg-[#2d3748] text-gray-300 placeholder-gray-500"
              rows={3}
              placeholder="Enter item name, quantity, due date, or any additional details"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-5/12 bg-black text-white p-3 rounded-md hover:bg-[#2d3748] transition-colors"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Request'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-5/12 bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
        {status === 'succeeded' && <p className="text-green-500 mt-4 text-center">Quote request sent successfully!</p>}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default QuoteForm;