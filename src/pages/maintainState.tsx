import { RootState } from '@src/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

const MainTainState = (): JSX.Element => {
  const { testReduxObject } = useSelector(
    (state: RootState) => state.testReducer,
  );
  return (
    <>
      <h1>스테이트 유지 여부</h1>
      {testReduxObject?.id || '유지한 상태 없음'}
    </>
  );
};

export default MainTainState;
