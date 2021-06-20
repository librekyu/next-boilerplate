import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_DOMAIN || 'http://127.0.0.1:5000'}`,
  timeout: 30000,
});

instance.interceptors.request.use(
  (request) => {
    console.log(
      `Request[${request.method}] > url: ${request.url}\n`,
      request.data ? 'data: ' : '',
      request.data ? request.data : '',
    );
    return request;
  },
  (error) => {
    console.error('request error > ', error);
    return Promise.reject(error);
  },
);
instance.interceptors.response.use(
  (response) => {
    console.log(
      `Response[${response.status}] > ${response.config.url}`,
      `\nconfig: `,
      '[',
      response.config.method,
      ']',
      response.config.url,
      response.config.data || '',
      `\ndata: `,
      response.data,
    );
    return response;
  },
  (error) => {
    console.error('response error > ', error.response);
    return Promise.reject(error);
  },
);

/**
 * T: type
 * R: response
 * */
export type ApiRequest<T, R> = (param?: T) => Promise<AxiosResponse<R>>;
export type ApiResponse<T> = AxiosResponse<T>;
export default instance;
