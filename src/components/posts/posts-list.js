import React from 'react';
import { Grid } from '@mui/material';
import CardPost from '../../ui/cards';

const PostsList = ({ posts }) => {
  return (
    <>
      <Grid container spacing={2} direction="row">
        {posts.map((details, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <CardPost key={i} details={details} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default PostsList;
