import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import { useTheme } from '@mui/material/styles';
import brandingImg from 'assets/landing-bg.svg';
import PageHeader from 'components/Common/PageHeader';
import Spinner from 'components/Common/Spinner';
import GoogleButton from 'react-google-button';
import { Navigate } from 'react-router-dom';
import { homepage } from 'utils/spaUrls';


export default function Login() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  const theme = useTheme();
  const buttonLabel = 'Get Started';

  if (isLoading) {
    return <Spinner />;
  }
  else if (isAuthenticated) {
    return <Navigate to={homepage} />;
  }
  return (
    <Box>
      <PageHeader title='SuperCMO' />
      <Box mt='3%' mb='10px' />
      <Grid container spacing={2} justifyContent='space-between'>
        <Hidden smDown>
          <Grid item sm={5}><img width='80%' height='100%' src={brandingImg} alt='' /></Grid>
        </Hidden>
        <Grid item xs={10} sm={5} lg={3}>
          <Grid item xs={12}>
            <GoogleButton
              label={buttonLabel}
              onClick={() => loginWithRedirect()}
              type={theme.palette.mode}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
