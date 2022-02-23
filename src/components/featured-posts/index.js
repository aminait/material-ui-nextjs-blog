import React from 'react';
import { Grid } from '@mui/material';
import TabPanel from '../../ui/tab-panel';

const FeaturedPosts = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} md={12} lg={12} xl={12}>
        FeaturedPosts
        <TabPanel />
      </Grid>
    </Grid>
  );
};

export default FeaturedPosts;
