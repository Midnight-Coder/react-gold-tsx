import { useAuth0 } from '@auth0/auth0-react';
import Spinner from 'components/Common/Spinner';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from 'utils/spaUrls';


export default function PrivateRoute({ outlet } : {outlet: JSX.Element}) {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) { return <Spinner />; }
  else if (isAuthenticated) { return outlet; }
  else { return <Navigate to={auth.login} />; }
}
