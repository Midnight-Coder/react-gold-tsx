import { EEvents, IIdentifyUserArgs, TEventProperties } from 'instrumentation/analytics.types';
import mixpanel from 'mixpanel-browser';
import posthog from 'posthog-js';


const isDev = process.env.REACT_APP_ENV === 'DEV';

export function init() {
  if (isDev) {
    return;
  }
  initPosthog();
  initMixpanel();
}

export function reset() {
  if (isDev) {
    return;
  }
  posthog.reset();
  mixpanel.reset();
}

export function trackPageView() {
  if (isDev) {
    return;
  }
  posthog.capture('$pageview');
  mixpanel.track_pageview();
}

export function trackEvents(eventName: EEvents, properties?: TEventProperties) {
  if (isDev) {
    return;
  }
  posthog.capture(eventName, properties);
  mixpanel.track(eventName, properties);
}

export function identifyUser({ userId, ...rest }: IIdentifyUserArgs) {
  posthog.identify(userId, { set: rest?.set }, { setOnce: rest?.setOnce });
  mixpanel.identify(userId);
}

function initPosthog() {
  const key = process.env.REACT_APP_POSTHOG_API_KEY || '';
  console.log('instrumenting with posthog');
  posthog.init(key, { api_host: 'https://app.posthog.com' });
}

function initMixpanel() {
  const key = process.env.REACT_APP_MIXPANEL_API_KEY || '';
  console.log('instrumenting with mixpanel');
  mixpanel.init(key, { persistence: 'localStorage' });
}
