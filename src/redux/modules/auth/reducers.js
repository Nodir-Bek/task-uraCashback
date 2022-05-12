import types from '../../../constants/action-types';

const defaultState = {
  token: localStorage.getItem('token'),
  phoneNumber: '',
};

const map = {
  [types.SET_AUTH_USER_DATA]: (state, { payload }) => ({
    ...state,
    phoneNumber: payload,
  }),
  [types.SET_TOKEN]: (state, { payload }) => ({
    ...state,
    token: payload,
  }),
  [types.CLEAR_TOKEN]: (state) => ({
    ...state,
    token: undefined,
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
