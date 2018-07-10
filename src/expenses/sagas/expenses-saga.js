import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { FETCH_EXPENSES, SAVE_EXPENSES } from '../constants/action-types';
import { fetchExpenses as fetchExpensesAction, saveExpenses as  saveExpensesAction } from '../actions/actions';
import { request } from '../../utils/api/request';

function* fetchExpensesApi() {
  const url = `expenses`;
  const response = yield call(request, url, 'GET');
  return response.data;
}


function* fetchExpenses() {
  try {
    const response = yield call(fetchExpensesApi);
    //return yield call put(saveExpensesAction(response));
    yield put(saveExpensesAction(response));
  } catch (error) {
    return error;
  }
}

function* watchFetchExpenses() {
  yield takeLatest(FETCH_EXPENSES, fetchExpenses);
  yield takeLatest(SAVE_EXPENSES, saveExpensesAction);
}

export {
  fetchExpensesApi,
  fetchExpenses,
  watchFetchExpenses,
};
