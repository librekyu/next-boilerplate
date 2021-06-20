import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import testSaga from './containers/Test/saga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(testSaga)]);
}
