import axios from 'axios';
import { API_HOST, API_TIMEOUT } from '../config';
import useStore from '../store';

export const fetchApi = async ({
  url, path, method = 'GET', data, params, headers, ...rest
}) => {
  const { token } = useStore.getState();

  const finalHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: path ? token : undefined,
    ...headers,
  };

  try {
    const response = await axios({
      timeout: API_TIMEOUT,
      baseURL: API_HOST,
      url: url || path,
      method,
      data,
      params,
      headers: finalHeaders,
      ...rest,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
