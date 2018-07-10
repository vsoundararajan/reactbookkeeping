import * as actionTypes from '../constants/action-types';

const initialState = {
  expenses: [],
  editId: null
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
        ...state,
        expenses,
      }
    }
    case actionTypes.SET_EDIT_EXPENSE_ID: {
      const editId = action.expenseId;
      return {
        ...state,
        editId: editId,
      }
    }
    default: return state;
  }
}
export default expensesReducer;
