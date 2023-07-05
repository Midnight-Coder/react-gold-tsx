import Grid from '@mui/material/Grid';
import PageHeader from 'components/Common/PageHeader';
import { allItems } from 'utils/NavTree';


export default function ConnectionList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader title={allItems.connectionsList.name} Icon={allItems.connectionsList.Icon} />
      </Grid>
    </Grid>
  );
}
