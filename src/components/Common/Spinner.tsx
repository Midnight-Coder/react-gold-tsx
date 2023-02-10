import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function CircularIndeterminate() {
  return (
    <Box sx={{
      margin: 0,
      position: 'absolute',
      top: '35%',
      left: '50%',
    }}
    >
      <CircularProgress color='secondary' />
    </Box>
  );
}
