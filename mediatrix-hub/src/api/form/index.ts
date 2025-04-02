import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
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

export default api;