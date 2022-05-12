import forms from './actions/form';
import companies from './actions/companies';
import auth from './actions/auth';
import application from './actions/application';
import lang from './actions/lang';
import countDown from './actions/countDown';
import products from './actions/products';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...forms,
  ...auth,
  ...companies,
  ...application,
  ...lang,
  ...countDown,
  ...products,
};
