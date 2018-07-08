import { saga as fetchExpensesSaga } from './expenses';

export default function* rootSaga() {
  yield [
    fetchExpensesSaga(),
  ];
}
