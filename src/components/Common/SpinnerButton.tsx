import { Button, ButtonProps, CircularProgress } from '@mui/material';
import React from 'react';


type Props<C extends React.ElementType> = ButtonProps<C, { component?: C }> & {
  isLoading?: boolean;
}

export default function SpinnerButton<C extends React.ElementType>({
  children,
  isLoading: loading = false,
  ...buttonProps
}: Props<C>) {
  const optionalProps = loading
    ? {
      disabled: true,
      startIcon: <CircularProgress size={20} />,
    }
    : {};

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...buttonProps} {...optionalProps}>
      {children}
    </Button>
  );
}
