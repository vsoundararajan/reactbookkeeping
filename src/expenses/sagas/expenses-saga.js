import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { FETCH_EXPENSES } from '../constants/action-types';
import { fetchExpenses as fetchExpensesAction } from '../actions/actions';
import request from '../../utils/api/request';

function* fetchExpensesApi() {
  const url = `expenses`;
  const response = yield call(request, url, 'GET');
  return response;
}


function* fetchExpenses() {
  try {
    return yield call(fetchExpensesApi);
  } catch (error) {
    return error;
  }
}

function* watchFetchExpenses() {
  yield takeLatest(FETCH_EXPENSES, fetchExpenses);
}

export {
  fetchExpensesApi,
  fetchExpenses,
  watchFetchExpenses,
};
