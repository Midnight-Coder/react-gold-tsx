import { EEvents, IIdentifyUserArgs, TEventProperties } from 'instrumentation/analytics.types';
import mixpanel from 'mixpanel-browser';
import posthog from 'posthog-js';


export function init() {
  if (process.env.REACT_APP_ENV === 'DEV') {
    return;
  }
  initPosthog();
  initMixpanel();
}

export function reset() {
  if (process.env.REACT_APP_ENV === 'DEV') {
    return;
  }
  posthog.reset();
  mixpanel.reset();
}

export function trackPageView() {
  posthog.capture('$pageview');
  mixpanel.trackPageView();
}

export function trackEvents(eventName: EEvents, properties?: TEventProperties) {
  posthog.capture(eventName, properties);
  mixpanel.track(eventName, properties);
}

export function identifyUser({ userId, ...rest }: IIdentifyUserArgs) {
  posthog.identify(userId, { set: rest?.set }, { setOnce: rest?.setOnce });
  mixpanel.identify(userId);
}

function initPosthog() {
  const key = process.env.REACT_APP_POSTHOG_API_KEY || '';
  posthog.init(key, { api_host: 'https://app.posthog.com' });
}

function initMixpanel() {
  const key = process.env.REACT_APP_MIXPANEL_API_KEY || '';
  mixpanel.init(key, { persistence: 'localStorage' });
}
