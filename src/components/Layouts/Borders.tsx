import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Header from 'components/Layouts/Header';
import React from 'react';


export default function Borders({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Box component='nav' mx='10px' mt={`calc(${theme.custom.appBarHeight} + 15px)`}>
        <Box component='main' ml={3}>{children}</Box>
      </Box>
    </>
  );
}
