import { useAuth0 } from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import brandingImg from 'assets/branding.svg';
import PageHeader from 'components/Common/PageHeader';
import Spinner from 'components/Common/Spinner';
import SignupButton from 'pages/Authentication/components/SignupButton';
import React from 'react';
import GoogleButton from 'react-google-button';
import { Navigate } from 'react-router-dom';
import { homepage } from 'utils/spaUrls';


export default function Login() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  const theme = useTheme();
  const buttonLabel = useMediaQuery(theme.breakpoints.down('sm')) ? 'Sign In'
    : 'Sign in with Google';

  if (isLoading) {
    return <Spinner />;
  }
  else if (isAuthenticated) {
    return <Navigate to={homepage} />;
  }
  return (
    <>
      <PageHeader title='SuperCMO' subtitle='Automate Your Marketing With AI' />
      <Box mt='3%' mb='10px' />
      <Grid container spacing={2} justifyContent='space-between'>
        <Grid item xs={10} sm={5} lg={3}>
          <Paper sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            p: 2,
            mt: 5,
          }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <GoogleButton
                  label={buttonLabel}
                  onClick={() => loginWithRedirect()}
                  type={theme.palette.mode}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2'>
                  Want to try?
                  <SignupButton />
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid item sm={1}>
            <Divider
              light
              orientation='vertical'
              textAlign='left'
              variant='middle'
            />
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item sm={5}><img width='80%' height='100%' src={brandingImg} alt='' /></Grid>
        </Hidden>
      </Grid>
    </>
  );
}
