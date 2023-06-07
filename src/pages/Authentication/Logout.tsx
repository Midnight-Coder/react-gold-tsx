import { useAuth0 } from '@auth0/auth0-react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React from 'react';
import { auth } from 'utils/spaUrls';


export default function Logout() {
  const { logout } = useAuth0();
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
  const onLogout = React.useCallback(() => {
    localStorage.clear();
    logout({
      clientId,
      logoutParams: { returnTo: `${window.location.origin}${auth.login}` },
    });
  }, [logout]);

  return (
    <MenuItem onClick={onLogout}><Typography color='primary'>Logout</Typography></MenuItem>
  );
}
