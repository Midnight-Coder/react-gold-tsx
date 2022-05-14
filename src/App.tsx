import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Auth0ProviderWithHistory from 'pages/Authentication/components/Auth0-provider-with-history';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from 'Router';
import Store from 'Store';
import Theme from 'theme';
import { CacheKeys } from 'utils/constants';


export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  if (prefersDarkMode) {
    localStorage.setItem(CacheKeys.enableDarkMode, 'true');
  }
  else {
    localStorage.removeItem(CacheKeys.enableDarkMode);
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={Store}>
          <Auth0ProviderWithHistory>
            <ThemeProvider theme={Theme}>
              <CssBaseline enableColorScheme />
              <Router />
            </ThemeProvider>
          </Auth0ProviderWithHistory>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
