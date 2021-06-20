import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { testAction } from './actions';
import {
  LOAD_TEST,
  TEST_FAILURE,
  TEST_REQUEST,
  TEST_SUCCESS,
} from './constants';
import * as testApi from './api';

import { SagaEffect } from '@src/utils/SagaUtils';
import { testActions } from '@src/containers/Test/actions';

function* test(action: testActions): SagaIterator {
  yield put({ type: TEST_REQUEST });
  try {
    const { data }: SagaEffect<typeof testApi.testApi> = yield call(
      testApi.testApi,
      action.payload,
    );

    yield put(testAction.success(data));
    yield put({ type: TEST_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: TEST_FAILURE, payload: e });
  }
}

function* watchTest(): SagaIterator {
  yield takeLatest(LOAD_TEST, test);
}

export default function* testSaga(): SagaIterator {
  yield all([fork(watchTest)]);
}
