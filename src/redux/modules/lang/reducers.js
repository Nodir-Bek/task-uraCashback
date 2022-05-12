import types from '../../../constants/action-types';

const defaultState = {
  language: localStorage.getItem('i18nextLng') || 'uz',
};

const map = {
  [types.SET_LANGUAGE]: (state, { payload }) => ({
    ...state,
    language: payload,
  }),
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
