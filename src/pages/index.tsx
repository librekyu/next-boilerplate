import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { testApi } from '@src/containers/Test/api';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import api from '@src/utils/AxiosUtils';

function IndexPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const [ids, setIds] = useState('');
  const { testReduxObject } = useSelector(
    (state: RootState) => state.testReducer,
  );

  useEffect(() => {
    api
      .get('https://movie.daum.net/api/contents/popularNews?size=4')
      .catch((e) => console.error(e));
  }, []);

  const renderTestReduxObject = useCallback(() => {
    return (
      <div>
        <p>
          <b>redux</b>
        </p>
        <p>{testReduxObject?.id || '데이터 조회 전'}</p>
      </div>
    );
  }, [testReduxObject]);

  return (
    <div>
      <h1>스터디</h1>
      시작점 여기서부터 알아서 해라
      <ContainerStyle>
        <ButtonStyle
          onClick={() => {
            dispatch({ type: LOAD_TEST });
          }}
        >
          데이터 로드 (redux-saga)
        </ButtonStyle>
        <ButtonStyle
          onClick={() => {
            testApi().then((response) => {
              setIds(response.data?.items?.map((item) => item.id)?.toString());
            });
          }}
        >
          데이터 로드 (axios promise)
        </ButtonStyle>
        <ButtonStyle
          onClick={() => {
            router.push('/maintainState');
          }}
        >
          페이지 이동
        </ButtonStyle>
      </ContainerStyle>
      <ContainerStyle>
        {renderTestReduxObject()}
        <div>
          <p>
            <b>axios promise</b>
          </p>
          <p>{ids || '데이터 조회 전'}</p>
        </div>
        <div></div>
      </ContainerStyle>
    </div>
  );
}

const ContainerStyle = styled.div`
  padding: 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

const ButtonStyle = styled.button`
  background-color: #00d094;
  padding: 10px 20px;
`;

export default IndexPage;
