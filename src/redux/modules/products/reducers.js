import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  total: 0,
  error: '',
  loading: false,
};

const map = {
  [types.TABLE_PRODUCTS_SET_DATA]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [types.TABLE_PRODUCTS_SET_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload,
  }),
  [types.TABLE_PRODUCTS_SET_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [types.TABLE_PRODUCTS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
};

// eslint-disable-next-line max-len
export default (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;
