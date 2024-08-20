import { ListItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import PageHeader from 'components/Common/PageHeader';
import List from '@mui/material/List';
import React from 'react';
import { allPages } from 'components/HtmlLoader';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader title='Getting Started' />
      </Grid>
      <Grid item xs={12}>
        <List>
          {Object.keys(allPages).map((i) => (
            <ListItem key={i} component={Link} to={`/demo/${i}`}>{i}</ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
