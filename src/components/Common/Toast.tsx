import { Alert, AlertColor } from '@mui/material';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import React from 'react';


interface Props {
  message: string;
  type: AlertColor;
}

const propsForSnacks = {
  default: {
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' } as SnackbarOrigin,
    autoHideDuration: 5000,
  },
  errorWarn: {
    anchorOrigin: { vertical: 'top', horizontal: 'right' } as SnackbarOrigin,
    autoHideDuration: null,
  },
};


export default function Toast({ message, type = 'success' }: Props) {
  const [isOpen, toggleOpen] = React.useState(true);
  const typeSpecificProps = type === 'error' || type === 'warning' ? propsForSnacks.errorWarn : propsForSnacks.default;
  return (
    <Snackbar
      anchorOrigin={{ ...typeSpecificProps.anchorOrigin }}
      autoHideDuration={typeSpecificProps.autoHideDuration}
      sx={{ width: '30%' }}
      onClose={() => toggleOpen(false)}
      open={isOpen}
    >
      <Alert onClose={() => toggleOpen(false)} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
