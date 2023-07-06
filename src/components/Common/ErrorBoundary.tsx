import Home from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import exceptionImg from 'assets/error-500.png';
import BrandingBorder from 'components/Layouts/BrandingBorder';
import React, { ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ErrorCodes, helpEmail } from 'utils/errorUtils';
import { Logger } from 'utils/logger';
import { homepage } from 'utils/spaUrls';


interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component <IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Logger.error(ErrorCodes.common.uncaughtExpection, `${error}, ${errorInfo.componentStack}`);
  }

  render() {
    if (this.state.hasError) {
      return (
        <BrandingBorder>
          <Box textAlign='center' mt={3} mx='20%'>
            <Stack spacing={2}>
              <Paper elevation={0}><img src={exceptionImg} alt='Exception' /></Paper>
              <Link to={`mailto:${helpEmail}`}>{`Please contact us: ${helpEmail}`}</Link>
              <Button
                color='primary'
                href={homepage}
                startIcon={<Home />}
                size='large'
              >
                Take Me Home
              </Button>
            </Stack>
          </Box>
        </BrandingBorder>
      );
    }
    else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
