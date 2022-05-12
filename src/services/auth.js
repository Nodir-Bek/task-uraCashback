import { service } from '.';

export default {
  login: (data) => service.post('/security/send-verification', data),
  verification: (data) => service.post('/security/verify-login', data),
};
