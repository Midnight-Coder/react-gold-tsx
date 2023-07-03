import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import pageImage from 'assets/error-404.jpg';
import Grid from '@mui/material/Grid';
import Home from '@mui/icons-material/Home';
import { homepage } from 'utils/spaUrls';


export default function PageNotFound() {
  return (
    <Grid container spacing={2} textAlign='center'>
      <Grid item xs={12}>
        <img width='540px' src={pageImage} alt='Error 404: Missing page' />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h3'>OOPS! LOOKS LIKE YOU STUMBLED ON A DEAD LINK</Typography>
        <Typography variant='subtitle2'>Error 404</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color='primary'
          href={homepage}
          size='large'
          startIcon={<Home />}
          variant='contained'
        >
          Take Me Home
        </Button>
      </Grid>
    </Grid>
  );
}
