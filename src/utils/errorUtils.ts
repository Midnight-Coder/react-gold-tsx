export const helpEmail = 'support@supercmo.com';

export const fallbackMessage = `Something went wrong. Please contact us at ${helpEmail} for assistance.`;

export const ErrorCodes = {
  auth: {
    auth0ClientMisc: 'AUTH-AUTH0-ALL: Auth0 Client Error',
    auth0GetToken: 'AUTH-AUTH0-GET-TOKEN: Error getting access token silently',
    auth0MalformedToken: 'AUTH-AUTH0-MALFORMED-TOKEN: Malformed token',
  },
  common: {
    uncaughtExpection: 'COM-ALL-EXP: Uncaught Exception',
  },
};
