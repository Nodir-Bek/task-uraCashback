import { service } from '.';

export default {
  getAll: (id) => service.get(`companies/${id}/products`),
};
