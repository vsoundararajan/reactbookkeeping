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


export {
  fetchExpenses,
  saveExpenses
};
