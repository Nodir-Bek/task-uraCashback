import types from '../../../constants/action-types';

// export const clearStore = (payload) => ({
//   type: types.CLEAR_CART,
//   payload,
// });
export const startTimer = (payload) => {
  return {
    type: types.TIME_START,
    payload,
  };
};
export const stopTime = (payload) => {
  return {
    type: types.TIME_STOP,
    payload,
  };
};
// export const deleteData = (payload) => ({
//   type: types.DELETE_CART,
//   payload,
// });
// export const showCart = (payload) => ({
//   type: types.SHOW_CART,
//   payload,
// });
