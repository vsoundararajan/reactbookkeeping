import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { FETCH_EXPENSES, SAVE_EXPENSES, SET_EDIT_EXPENSE_ID } from '../constants/action-types';
import { fetchExpenses as fetchExpensesAction,
         saveExpenses as  saveExpensesAction,
         setEditExpenseId as setEditExpenseIdAction } from '../actions/actions';
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

function* setEditExpenseId(expenseId){
  yield put(setEditExpenseIdAction(expenseId));
}

function* watchFetchExpenses(expenseId) {
  yield takeLatest(FETCH_EXPENSES, fetchExpenses);
  yield takeLatest(SAVE_EXPENSES, saveExpensesAction);
  yield takeLatest(SET_EDIT_EXPENSE_ID, setEditExpenseId);
}

export {
  fetchExpensesApi,
  fetchExpenses,
  watchFetchExpenses,
};
