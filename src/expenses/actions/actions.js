import * as actionTypes from '../constants/action-types';


function fetchExpenses() {
  return {
    type: actionTypes.FETCH_EXPENSES,
  };
}


export {
  fetchExpenses,
};
