import _ from 'lodash';
import * as actionTypes from '../constants/action-types';

const initialState = {
  expenses: [],
};

function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_EXPENSES: {
      return {
        ...state,
        accountInfo: action.mappedResponse,
      };
    }
    default: return state;
  }
}
export default expensesReducer;