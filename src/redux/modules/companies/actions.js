import types from '../../../constants/action-types';

export const setData = (payload) => ({
  type: types.TABLE_COMPANIES_SET_DATA,
  payload,
});

export const setTotal = (payload) => ({
  type: types.TABLE_COMPANIES_SET_TOTAL,
  payload,
});
export const setError = (payload) => ({
  type: types.TABLE_COMPANIES_ERROR,
  payload,
});
export const setLoading = (payload) => ({
  type: types.TABLE_COMPANIES_SET_LOADING,
  payload,
});
export const fetchData = (payload) => ({
  type: types.TABLE_COMPANIES_FETCH_DATA,
  payload,
});

export const onSearch = (payload) => ({
  type: types.TABLE_COMPANIES_SAGA_ONSEARCH_ACTION,
  payload,
});
