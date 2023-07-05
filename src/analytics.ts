import posthog from 'posthog-js';


export function init() {
  if (process.env.REACT_APP_ENV === 'DEV') {
    return;
  }
  initPosthog();
}

export function reset() {
  if (process.env.REACT_APP_ENV === 'DEV') {
    return;
  }
  posthog.reset();
}

export function initPosthog() {
  posthog.init(
    process.env.REACT_APP_POSTHOG_API_KEY as string,
    { api_host: 'https://app.posthog.com' },
  );
}

interface IIdentifyUserArgs {
  userId: string;
  set?: Record<string, unknown>;
  setOnce?: Record<string, unknown>;
}

export function identifyUser({ userId, set, setOnce }: IIdentifyUserArgs) {
  posthog.identify(userId, set, setOnce);
}

interface INetworkEvent {
  url: string;
  request_method: string;
  request_payload?: string | FormData | undefined;
  response_status: number;
  response: string;
}

export function recordNetworkTraffic(o: INetworkEvent) {
  posthog.capture('network_request', o);
}
