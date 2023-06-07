import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from 'assets/logo.svg';
import React from 'react';


const ShadedHr = styled.hr`
  border: 0;
  box-shadow: ${({ theme }) => `10px 15px 10px -10px ${theme.palette.primary.main} inset`};
  height: 10px;
`;

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
      <footer>
        <Box mt={1} mr={5} textAlign='right'>
          <Typography variant='body2' sx={{ display: 'inline' }}>Powered by&nbsp;</Typography>
          <Typography variant='h4' sx={{ display: 'inline' }}>{'super{set}'}</Typography>
        </Box>
        <ShadedHr />
      </footer>
    </>
  );
}
