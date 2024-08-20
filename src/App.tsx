import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Router from 'Router';
import AppAlerts from 'components/Common/AppAlerts';
import ErrorBoundary from 'components/Common/ErrorBoundary';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Theme from 'theme';
import { CacheKeys } from 'utils/constants';


export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  React.useEffect(() => {
    if (prefersDarkMode) {
      localStorage.setItem(CacheKeys.enableDarkMode, 'true');
    }
    else {
      localStorage.removeItem(CacheKeys.enableDarkMode);
    }
  }, [prefersDarkMode]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <CssBaseline enableColorScheme />
          <AppAlerts>
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </AppAlerts>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
