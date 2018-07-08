import { combineReducers } from 'redux';
import expensesReducer from './expenses/reducers/reducer';

export default combineReducers({
  expensesReducer,
});
