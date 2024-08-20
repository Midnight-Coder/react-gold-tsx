import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';


export default function Header() {
  const theme = useTheme();
  return (
    <AppBar sx={{ maxHeight: theme.custom.appBarHeight }}>
      <Toolbar disableGutters />
    </AppBar>
  );
}
