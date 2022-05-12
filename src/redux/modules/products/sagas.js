import { takeLatest, put, delay } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import { setData, setError, setTotal, setLoading } from './actions';
import service from '../../../services/products';
import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    if (payload && payload.isSearch) yield delay(500);
    yield put(setLoading(true));
    const res = yield service.getAll(payload && payload.query);
    const { data, total } = dataSelector(res);
    yield put(setError(''));
    yield put(setData(data));
    yield put(setTotal(total));
    yield put(setLoading(false));
  } catch (error) {
    console.log('error', error);
    yield put(setError(error.message));
  }
}

function* onSearch({ payload }) {
  yield delay(500);
  console.log(payload);
}

export default function* productsSaga() {
  yield takeLatest(types.TABLE_PRODUCTS_FETCH_DATA, fetchData);
  yield takeLatest(types.TABLE_PRODUCTS_SAGA_ONSEARCH_ACTION, onSearch);
}
