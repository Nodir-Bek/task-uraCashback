import types from '../../../constants/action-types';

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

export const setAuthData = (payload) => ({
  type: types.SET_AUTH_USER_DATA,
  payload,
});
export const clearToken = () => {
  localStorage.removeItem('token');
  return {
    type: types.CLEAR_TOKEN,
  };
};
