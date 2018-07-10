import * as actionTypes from '../constants/action-types';


function fetchExpenses() {
  return {
    type: actionTypes.FETCH_EXPENSES,
  };
}

function saveExpenses(action) {
  return {
    type: actionTypes.SAVE_EXPENSES,
    action,
  };
}

function setEditExpenseId(expenseId) {
  return {
    type: actionTypes.SET_EDIT_EXPENSE_ID,
    expenseId: expenseId,
  };
}

export {
  fetchExpenses,
  saveExpenses,
  setEditExpenseId
};
