import React from 'react';
import BriefInfo from '../../../components/author/brief-info';
import AuthorSideCard from '../../../components/author/side-card';
import { Grid, Typography } from '@mui/material';
import NavLayout from '../../../layout/navLayout';
import PostDetailsHeader from '../../../components/post/details/header';
import SideActions from '../../../components/post/side-actions';
const ComponentsDemo = () => {
  return (
    <div>
      <Grid container>
        <Grid
          container
          direction="column"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>Author Components</Typography>
          <Grid item>
            <BriefInfo />
          </Grid>
          <Grid item>
            <AuthorSideCard />
          </Grid>
          <Grid
            container
            direction="column"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>Post Components</Typography>

            <Grid item>
              <SideActions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
ComponentsDemo.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default ComponentsDemo;
