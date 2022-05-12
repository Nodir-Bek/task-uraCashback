import types from '../../../constants/action-types';

export const setFormData = (payload) => ({
  type: types.FORMS_SET_DATA,
  payload
});

export const clearState = () => ({
  type: types.CLEAR_STATE
});

export const deleteForm = (id) => ({
  type: types.DELETE_FORM,
  payload: Number(id)
});
export const addForm = (payload) => ({
  type: types.ADD_FORM,
  payload
});
export const activeForm = (payload) => ({
  type: types.ACTIVE_FORM,
  payload
});
