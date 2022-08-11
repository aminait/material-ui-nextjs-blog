import React from 'react';
import NavLayout from '../../layout/navLayout';
import { getAllPosts } from '../../lib/posts-util';
import { Grid, Typography } from '@mui/material';
import CardPost from '../../ui/cards';

const PostsPage = (props) => {
  const { posts } = props;
  console.log('PostsPage -> posts', posts);
  return (
    <>
      <Typography variant="h2">All Posts</Typography>
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

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

PostsPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default PostsPage;
