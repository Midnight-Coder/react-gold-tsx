import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { trackPageView } from 'instrumentation/analytics';
import Auth0ProviderWithHistory from 'pages/Authentication/components/Auth0-provider-with-history';
import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Router from 'Router';
import Theme from 'theme';
import { CacheKeys } from 'utils/constants';


export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const location = useLocation();

  React.useEffect(() => { trackPageView(); }, [location]);

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
        <Auth0ProviderWithHistory>
          <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            <Router />
          </ThemeProvider>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </React.StrictMode>
  );
}
