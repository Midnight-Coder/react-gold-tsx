import { CacheKeys } from 'utils/constants';


export enum levels {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

export interface LogObject {
  errorCode: string;
  level: levels;
  pageUrl: string;
  userId: string;
}

const getLogObject = (level: levels, errorCode: string): LogObject => {
  const userId = localStorage.getItem(CacheKeys.userId) || 'unknown-user';
  return {
    errorCode,
    level,
    pageUrl: `${window.location.hostname}${window.location.pathname}`,
    userId,
  };
};

const handleLogging = (logObject: LogObject, args?: unknown) => {
  const env = process.env.REACT_APP_ENV?.toLocaleLowerCase() || '';
  if (env === 'test' || env === 'ci') { return; }
  // eslint-disable-next-line no-console
  console[logObject.level](logObject, args);
};

const log = (level: levels) => (errorCode: string, args?: unknown) => {
  const logObject = getLogObject(level, errorCode);
  handleLogging(logObject, args);
};

export const Logger = {
  error: log(levels.ERROR),
  info: log(levels.INFO),
  warn: log(levels.WARN),
};
