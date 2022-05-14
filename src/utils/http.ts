interface IFetchParams {
  method: string,
  [k: string]: string | number | undefined
}
// eslint-disable-next-line no-underscore-dangle
const _fetch = async (url: string, { method, ...rest }: IFetchParams) => {
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Access-Control-Allow-Credentials', 'true');
  headers.set('Access-Control-Allow-Origin', 'true');
  headers.set('Content-Type', 'application/json');

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
