import Home from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import pageImage from 'assets/error-404.jpg';
import { Link } from 'react-router-dom';
import { homepage } from 'utils/spaUrls';


export default function PageNotFound() {
  return (
    <Grid container spacing={2} textAlign='center'>
      <Grid item xs={12}>
        <img width='540px' src={pageImage} alt='Error 404: Missing page' />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h3'>HTTP ERROR 404</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color='primary'
          component={Link}
          size='large'
          startIcon={<Home />}
          to={homepage}
          variant='contained'
        >
          Take Me Home
        </Button>
      </Grid>
    </Grid>
  );
}
