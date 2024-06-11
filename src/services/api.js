import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Giriş yapılmadı:", error);
    throw error;
  }
};

export const register = async (data) => {
  return await api.post('/auth/register', data);
};


