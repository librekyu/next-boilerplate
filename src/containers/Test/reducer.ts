import produce from 'immer';
import { testActions } from './actions';
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from './constants';

export type TestState = {
  testReduxObject: any;
};

export const initialState: TestState = {
  testReduxObject: {},
};

function testReducer(
  state: TestState = initialState,
  action: testActions,
): TestState {
  return produce(state, (draft) => {
    switch (action.type) {
      case TEST_REQUEST: {
        break;
      }
      case TEST_SUCCESS: {
        draft.testReduxObject = action.payload?.items[0];
        break;
      }
      case TEST_FAILURE: {
        break;
      }
    }
  });
}

export default testReducer;
