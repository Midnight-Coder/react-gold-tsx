import { PaletteMode } from '@mui/material';
import {
  blueGrey, orange, deepOrange, red, yellow, amber,
} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { CacheKeys } from 'utils/constants';


declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      appBarHeight: string;
      sidebarWidth: string;
      smSidebarWidth?: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      appBarHeight?: string;
      sidebarWidth?: string;
      smSidebarWidth?: string;
    };
  }
}

const htmlFontSize = 18;
const fontSize = 16;

const Theme = createTheme({
  custom: {
    appBarHeight: '62px',
    sidebarWidth: '240px',
    smSidebarWidth: '80px',
  },
  palette: {
    mode: localStorage.getItem(CacheKeys.enableDarkMode) ? 'dark' : 'light' as PaletteMode,
    primary: {
      main: amber[800],
    },
    secondary: {
      main: orange[500],
    },
    error: {
      main: red[300],
    },
  },
  typography: {
    htmlFontSize,
    fontSize,
    fontFamily: '\'Roboto\', sans-serif',
    h1: {
      fontSize: '3rem',
    },
    h2: {
      borderBottom: `1px solid ${blueGrey[200]}`,
      fontSize: '1.5rem',
      marginBottom: '1rem',
    },
    h3: {
      borderBottom: `1px dotted ${blueGrey[200]}`,
      fontSize: '1rem',
      fontWeight: 'bold',
      paddingBottom: '5px',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      borderBottom: `1px dotted ${blueGrey[200]}`,
    },
    h6: {
      fontSize: '0.63rem',
      fontWeight: 'bold',
    },
    subtitle1: {
      color: blueGrey[200],
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.7rem',
    },
    caption: {
      fontSize: '0.7rem',
    },
    button: {
      borderRadius: '3px',
      padding: '6px 12px',
      textTransform: 'none',
    },
  },
});

export default Theme;
