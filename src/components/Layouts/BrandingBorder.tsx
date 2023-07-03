import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import logo from 'assets/logo.svg';
import React from 'react';


export default function BrandingBorder({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <>
      <AppBar color='transparent' sx={{ maxHeight: theme.custom.appBarHeight }}>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item xs={4}>
              <img height={theme.custom.appBarHeight} src={logo} alt='' />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component='main'
        sx={{
          mx: '5%',
          mt: `calc(${theme.custom.appBarHeight} + 5%)`,
          minHeight: '450px',
        }}
      >
        {children}
      </Box>
    </>
  );
}
