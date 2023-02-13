import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { adaptIsoStrings } from './isoConverter';

const instance = applyCaseMiddleware(
  axios.create({
    timeout: 30000,
    baseURL: '/api',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
);

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  /** luxon: convert to DateTime */
  adaptIsoStrings(response.data);
  return response;
});

export default instance;
