import { blueGrey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import React from 'react';


interface IProps {
  title: string;
  subtitle: string | undefined;
  Icon?: ((props: SvgIconProps) => JSX.Element) | null;
}

export default function PageHeader({ title, subtitle, Icon = null }: IProps) {
  return (
    <Grid container alignItems='center'>
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
      <Grid item xs={12}>
        <Divider sx={{ backgroundColor: blueGrey[300], height: '3px' }} />
      </Grid>
      <Grid item xs={12}>
        {subtitle ? (
          <Typography color='primary' sx={{ ml: 5 }} variant='h4'>{subtitle}</Typography>
        ) : null}
      </Grid>
    </Grid>
  );
}
