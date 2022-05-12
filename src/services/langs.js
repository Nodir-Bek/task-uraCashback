import { service } from '.';

export default {
  getAll: () => service.get('/language'),
  getOne: (id) => service.get(`/language/${id}`),
  checkName: (query) => service.get(`/language/validation${query}`),
  create: (data) => service.post('/language/', data),
  update: (id, data) => service.patch(`/language/${id}`, data),
};
