const isDev = process.env.REACT_APP_ENV === 'DEV';
const baseUrl = (isDev) ? '/' : '__API_HOST__/';

const sample = {
  status: `${baseUrl}/status`
};

export default sample;
