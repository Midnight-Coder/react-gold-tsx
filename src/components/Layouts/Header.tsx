import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import UserSettings from 'components/Layouts/UserSettings';


export default function Header() {
  const theme = useTheme();
  return (
    <AppBar sx={{ maxHeight: theme.custom.appBarHeight }}>
      <Toolbar disableGutters>
        <Grid container justifyContent='flex-end'>
          <Grid item xs={4} md={1} sx={{ textAlign: 'center' }}>
            <UserSettings />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
