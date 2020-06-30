import axios, { CancelToken } from 'axios';


/**
 * A base request with common params predefined
 * fully customizable, baseRequest is used to prevent boilerplate code generation
 * @returns {AxiosPromise}
 */
export const axiosBaseRequest = ({
  method = 'GET', url, responseType = 'json', withCredentials = true, then = (r => r.data), timeout = 60000, ...options
}) => {
  const source = CancelToken.source();
  if (timeout) {
    setTimeout(() => {
      source.cancel();
    }, timeout);
  }

  return axios({
    method,
    url,
    responseType,
    withCredentials,
    ...options,
    cancelToken: source.token,
  }).then(then);
};
