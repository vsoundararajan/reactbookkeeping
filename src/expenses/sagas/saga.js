import { fetchExpensesApi, fetchExpenses, watchFetchExpenses} from './expenses-saga';

export function* fetchExpensesSaga() {
  yield [
    fetchExpensesApi(),
    fetchExpenses(),
    watchFetchExpenses(),
  ];
}
