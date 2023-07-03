import Grid from '@mui/material/Grid';
import PageHeader from 'components/Common/PageHeader';


export default function ConnectionList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader title='Connections' />
      </Grid>
    </Grid>
  );
}
