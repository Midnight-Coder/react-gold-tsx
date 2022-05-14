import React, { ReactNode } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { auth } from 'utils/spaUrls';


const landingPadUri = `${window.location.origin}${auth.landingPad}`;

export default function Auth0ProviderWithHistory({ children }: {children: ReactNode}) {
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';

  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      audience={audience}
      clientId={clientId}
      domain={domain}
      onRedirectCallback={onRedirectCallback}
      redirectUri={landingPadUri}
    >
      {children}
    </Auth0Provider>
  );
}
