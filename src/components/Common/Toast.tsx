import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import React from 'react';


interface Props {
  message: string;
  type: 'success' | 'error' | 'info' | 'warn';
}

export default function Toast({ message, type = 'success' }: Props) {
  const [isOpen, toggleOpen] = React.useState(true);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={3000}
      sx={{ width: '30%' }}
      onClose={() => toggleOpen(false)}
      open={isOpen}
    >
      <SnackbarContent
        action={<Button color='inherit' onClick={() => toggleOpen(false)}><CloseIcon /></Button>}
        sx={{ color: `${type === 'success' ? 'primary' : 'error.main'}` }}
        message={message}
      />
    </Snackbar>
  );
}
