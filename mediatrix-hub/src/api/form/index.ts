import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/leads',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const saveConsultationForm = async (data: {
  name: string;
  email: string;
  phone: string;
  caseType: string;
}) => {
  console.log("Saving consultation form data:", data);
  const response = await api.post('/consultation', data);
  return response.data;
};

export const saveContactForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  lawFirm: string;
  caseTypes: string;
  leadVolume: string;
  additionalInfo: string;
}) => {
  const response = await api.post('/contact', data);
  return response.data;
};

export const saveQuoteForm = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderDetails: string;
  quoteType: string;
}) => {
  const response = await api.post('/quote', data);
  return response.data;
};

export default api;