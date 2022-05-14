import Button from '@mui/material/Button';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


export default function SignupButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      color='primary'
      disabled
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      Sign Up
    </Button>
  );
}

