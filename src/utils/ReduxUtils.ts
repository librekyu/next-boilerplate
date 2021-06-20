export type ActionTypes<T> = T[keyof T] extends (...args: any[]) => any
  ? ReturnType<T[keyof T]>
  : T[keyof T];

export const createActionCreator = <T>(type: T) => <TP>() => (payload?: TP) =>
  ({ type, payload } as const);

export const createAsyncActionCreator = <R, S, F>(
  request: R,
  success: S,
  failure: F,
) => <RP, SP, FP>() => ({
  request: (payload?: RP) => ({ type: request, payload } as const),
  success: (payload?: SP) => ({ type: success, payload } as const),
  failure: (payload?: FP) => ({ type: failure, payload } as const),
});
