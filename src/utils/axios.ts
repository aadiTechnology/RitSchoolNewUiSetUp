import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosInt = axios.create({
  baseURL: 'http://api.aaditechnology.info/',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

const axiosMockInt = axios.create();

axiosInt.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
);

export const mock = new AxiosMockAdapter(axiosMockInt, { delayResponse: 0 });

export default axiosInt;
