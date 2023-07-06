import { useAuth0 } from '@auth0/auth0-react';
import Spinner from 'components/Common/Spinner';
import Toast from 'components/Common/Toast';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { save } from 'utils/cacheUtils';
import { CacheKeys } from 'utils/constants';
import { ErrorCodes } from 'utils/errorUtils';
import { Logger } from 'utils/logger';
import { auth } from 'utils/spaUrls';


const audience = process.env.REACT_APP_AUTH0_AUDIENCE || '';

export default function PrivateRoute({ outlet } : {outlet: JSX.Element}) {
  const auth0Client = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        const t = await auth0Client.getAccessTokenSilently({ authorizationParams: { audience } });
        save(CacheKeys.token, t);
      }
      catch (error) {
        if (error instanceof Error) {
          Logger.error(ErrorCodes.auth.auth0GetToken, error.message);
        }
        navigate(auth.login);
      }
    })();
  }, [auth0Client, navigate]);

  if (!auth0Client || auth0Client.isLoading) { return <Spinner />; }
  else if (auth0Client.isAuthenticated) { return outlet; }
  else if (auth0Client.error) {
    Logger.warn(ErrorCodes.auth.auth0ClientMisc, `${auth0Client.error.name} - ${auth0Client.error.message}`);
    return <Toast type='error' message={auth0Client.error.name} />;
  }
  else { return <Navigate to={auth.login} />; }
}
