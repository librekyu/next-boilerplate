import {
  ActionTypes,
  createActionCreator,
  createAsyncActionCreator,
} from '@src/utils/ReduxUtils';

import {
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_FAILURE,
  LOAD_TEST,
} from './constants';

export const testAction = createAsyncActionCreator(
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_FAILURE,
)<null, any, any>();

export const loadTest = createActionCreator(LOAD_TEST)<null>();

export type loadTest = ReturnType<typeof loadTest>;

export type testActions = ActionTypes<typeof testAction> | loadTest;
