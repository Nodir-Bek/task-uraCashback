import types from '../../../constants/action-types';

const defaultState = {
  data: {},
  status: false,
};

const map = {
  [types.TIME_START]: (state, { payload }) => ({
    ...state,
    status: payload,
  }),
  [types.TIME_STOP]: (state, { payload }) => ({
    ...state,
    status: payload,
  }),
};

// eslint-disable-next-line max-len
const reducer = (state, action) =>
  (map[action.type] && map[action.type](state, action)) ||
  state ||
  defaultState;

export default reducer;
