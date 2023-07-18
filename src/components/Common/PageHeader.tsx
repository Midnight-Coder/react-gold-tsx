import { SvgIconComponent } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
import BreadcrumbsNavigation, { TBreadcrumb } from 'components/Common/BreadcrumbsNavigation';
import { Link } from 'react-router-dom';
import { AllPageTitles } from 'utils/NavTree';


type Props = {
  title: AllPageTitles | 'SuperCMO';
  subtitle?: string;
  Icon?: SvgIconComponent;
  sx?: Record<string, unknown> | null;
  createLink?: string;
  breadcrumbs?: TBreadcrumb[];
}

export default function PageHeader({
  title, subtitle, Icon, sx, createLink, breadcrumbs,
}: Props) {
  return (
    <Grid container sx={sx}>
      <Grid item xs={12} md={6} lg={8}>
        <Typography variant='h1'>
          {Icon ? (
            <>
              <Icon fontSize='large' />
                &nbsp;
            </>
          ) : null}
          {title}
        </Typography>
      </Grid>
      { createLink ? (
        <Grid item xs={12} md={5} lg={3} textAlign='right'>
          <Button
            color='primary'
            component={Link}
            to={createLink}
            variant='contained'
          >
            Create New
          </Button>
        </Grid>
      ) : null}

      <Grid item xs={12}>
        <Divider sx={{ backgroundColor: blueGrey[300], height: '3px' }} />
      </Grid>
      {breadcrumbs ? (
        <Grid item xs={12} md={6} lg={4}>
          <Box display='flex' justifyContent='flex-end' alignItems='center'>
            <BreadcrumbsNavigation items={breadcrumbs} />
          </Box>
        </Grid>
      ) : null}
      <Grid item xs={12}>
        {subtitle ? (
          <Typography color='primary' sx={{ ml: 5 }} variant='h4'>{subtitle}</Typography>
        ) : null}
      </Grid>
    </Grid>
  );
}
