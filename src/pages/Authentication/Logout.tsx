import { useAuth0 } from '@auth0/auth0-react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React from 'react';
import { auth } from 'utils/spaUrls';


export default function Logout() {
  const { logout } = useAuth0();
  const onLogout = React.useCallback(() => {
    localStorage.clear();
    logout({ returnTo: `${window.location.origin}${auth.login}` });
  }, [logout]);

  return (
    <MenuItem onClick={onLogout}><Typography color='primary'>Logout</Typography></MenuItem>
  );
}
