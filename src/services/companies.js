import { service } from '.';

export default {
  getAll: () => service.get('/companies'),
  getOne: (id) => service.get(`companies/${id}/products`),
};
