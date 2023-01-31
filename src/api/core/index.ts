import axios from 'axios';

const instance = axios.create({
  timeout: 30000,
  baseURL: '/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  // const token = AuthToken.getToken();
  // config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use((response) => {
  const data = response.data;
  return data;
});

export default instance;
