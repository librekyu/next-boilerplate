import { call, put } from 'redux-saga/effects';
import { ApiRequest } from './AxiosUtils';
import { SagaIterator } from 'redux-saga';

export type Entity<R, S, F> = {
  request: R;
  success: S;
  failure: F;
};

// export const fetchEntity = <
//   R extends Function,
//   S extends Function,
//   F extends Function,
//   Param extends any,
//   Response
// >(
//   entity: Entity<R, S, F>,
//   apiFn: ApiReqeust<Param, Response>,
// ) =>
//   function* (params: Param): SagaIterator {
//     yield put(entity.request(params));
//     try {
//       const { data } = yield call(apiFn, params);
//       //FIXME: data.content 처리..
//       yield put(entity.success(data));
//     } catch (e) {
//       yield put(entity.failure(e.message));
//     }
//   };

export type SagaEffect<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : ReturnType<T extends (...args: any) => any ? T : any>;
