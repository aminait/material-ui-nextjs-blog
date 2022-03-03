import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import TabItems from '../../../ui/tabs';
import posts from '../../../constants/mock/posts';
console.log('posts', posts);

const HighlightedPosts = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <TabItems posts={posts} />
      </Grid>
    </Grid>
  );
};

export default HighlightedPosts;
