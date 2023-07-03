import { useAuth0 } from '@auth0/auth0-react';
import Spinner from 'components/Common/Spinner';
import { Navigate } from 'react-router-dom';
import { CacheKeys } from 'utils/constants';
import { homepage } from 'utils/spaUrls';


export default function LandingPad() {
  const response = useAuth0();
  if (response.user) {
    localStorage.setItem(CacheKeys.profileSrc, response.user.picture as string);
    localStorage.setItem(CacheKeys.userId, response.user.sub as string);
    localStorage.setItem(CacheKeys.orgId, response.user.org_id as string);
  }

  if (response.isLoading) { return <Spinner />; }
  else { return (<Navigate to={homepage} />); }
}
