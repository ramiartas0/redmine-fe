import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const login = async (data) => {
  return await api.post('/auth/login', data);
};

export const register = async (data) => {
  return await api.post('/auth/register', data);
};


