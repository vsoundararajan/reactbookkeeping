import * as actionTypes from '../constants/action-types';

const initialState = {
  expenses: [],
};

function expensesReducer(state = initialState, action) {
  const expenses = action.action;
  switch (action.type) {
    case actionTypes.FETCH_EXPENSES: {
      return {
        ...state,
      };
    }
    case actionTypes.SAVE_EXPENSES: {
      return {
        expenses,
      }
    }
    default: return state;
  }
}
export default expensesReducer;
