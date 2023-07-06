import { retrieve } from 'utils/cacheUtils';
import { CacheKeys } from 'utils/constants';
import { v4 as uuidv4 } from 'uuid';


interface IFetchParams {
  method: string,
  [k: string]: string | number | undefined
}
// eslint-disable-next-line no-underscore-dangle
const _fetch = async (url: string, { method, ...rest }: IFetchParams) => {
  const requestId = uuidv4();
  const sessionId = retrieve(CacheKeys.sessionId, { setToIfNull: uuidv4() });
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Allow-Origin', 'true');
  headers.set('Content-Type', 'application/json');
  headers.set('X-Request-ID', requestId);
  headers.set('X-Session-ID', sessionId);

  try {
    const response = await fetch(url, {
      method,
      headers,
      credentials: 'include',
      ...rest,
    });
    return await response.json();
  }
  catch (err) {
    /* Catch network/non-API errors */
    return { error: 'Could not establish link with server' };
  }
};

const http = {
  delete: async (url: string) => _fetch(url, { method: 'DELETE' }),

  get: async (url: string) => _fetch(url, { method: 'GET' }),

  patch: async (url: string, payload: object) => _fetch(
    url,
    { method: 'PATCH', body: JSON.stringify(payload) },
  ),

  post: async (url: string, payload: object) => _fetch(
    url,
    { method: 'POST', body: JSON.stringify(payload) },
  ),

  put: async (url: string, payload: object) => _fetch(
    url,
    { method: 'PUT', body: JSON.stringify(payload) },
  ),

};

export default http;
