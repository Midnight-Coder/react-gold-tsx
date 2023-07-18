import { Logger } from 'utils/logger';


export function save(key: string, value: string) {
  return localStorage.setItem(key, value);
}

type TRetrieveArgs = {
    parseJson?: boolean;
    setToIfNull?: unknown;
};

export function retrieve(key: string, { setToIfNull, parseJson = false }: TRetrieveArgs) {
  const value = localStorage.getItem(key);
  if (!value && setToIfNull) {
    save(key, JSON.stringify(setToIfNull));
    return setToIfNull;
  }

  if (!parseJson) {
    return value;
  }
  try {
    return JSON.parse(value || '');
  }
  catch (e) {
    Logger.warn('Read Cache: Parse Json', e);
    if (e instanceof SyntaxError) {
      return null;
    }
    else return e;
  }
}
