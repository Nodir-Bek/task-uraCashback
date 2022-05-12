import axios from 'axios';
import { service } from '.';

const baseURL = process.env.REACT_APP_API_URL;
export default {
  login: (data) => service.post('/security/send-verification', data),
  verification: (data) => service.post('/security/verify-login', data),
};
