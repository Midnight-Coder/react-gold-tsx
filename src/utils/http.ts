import { retrieve } from 'utils/cacheUtils';
import { CacheKeys } from 'utils/constants';
import { Logger } from 'utils/logger';
import { v4 as uuidv4 } from 'uuid';


interface IFetchParams {
  method: string,
  [k: string]: string | number | undefined
}
const fetchWrapper = async (url: string, { method, ...rest }: IFetchParams) => {
  const requestId = uuidv4();
  const sessionId = retrieve(CacheKeys.sessionId, { setToIfNull: uuidv4() });
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Allow-Origin', 'true');
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${localStorage.getItem(CacheKeys.token)}`);
  headers.set('X-Request-ID', requestId);
  headers.set('X-Session-ID', sessionId);

  try {
    const response = await fetch(url, {
      method,
      headers,
      credentials: 'include',
      ...rest,
    });
    if (!response.ok) {
      let message = response.statusText;
      if (response.status >= 400 && response.status < 500) {
        // Assumes API standardizes error responses to { message: string }
        message = (await response.json()).message;
      }
      throw new Error(message);
    }
    else if (response.headers.get('content-length') === '0') {
      // Handles HTTP 201, 204 -> no content responses
      return {};
    }
    else { return await response.json(); }
  }
  catch (err) {
    /* Catch network/non-API errors */
    Logger.error(`Request to ${url} failed`, err);
    throw err;
  }
};

const http = {
  delete: async (url: string) => fetchWrapper(url, { method: 'DELETE' }),

  get: async (url: string) => fetchWrapper(url, { method: 'GET' }),

  patch: async (url: string, payload: object) => fetchWrapper(
    url,
    { method: 'PATCH', body: JSON.stringify(payload) },
  ),

  post: async (url: string, payload: object) => fetchWrapper(
    url,
    { method: 'POST', body: JSON.stringify(payload) },
  ),

  put: async (url: string, payload: object) => fetchWrapper(
    url,
    { method: 'PUT', body: JSON.stringify(payload) },
  ),

};

export default http;
