import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import {
  createStore,
  compose,
  applyMiddleware,
  Store,
  Middleware,
  StoreEnhancer,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducer, { RootState } from './reducers';
import rootSaga from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middlewares: Middleware[]): StoreEnhancer => {
  const applyMiddlewares = applyMiddleware(...middlewares);

  return process.env.NODE_ENV === 'production'
    ? compose(applyMiddlewares)
    : composeWithDevTools(applyMiddlewares);
};

const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store: SagaStore = createStore(
    reducer,
    bindMiddleware([sagaMiddleware]),
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
