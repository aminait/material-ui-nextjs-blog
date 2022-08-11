import React from 'react';
import NavLayout from '../../layout/navLayout';
import { getAllPosts } from '../../lib/posts-util';
import { Grid, Typography, Divider, Stack } from '@mui/material';
import CardPost from '../../ui/cards';
import PostsList from '../../components/posts/posts-list';

const PostsPage = (props) => {
  const { posts } = props;
  console.log('PostsPage -> posts', posts);
  return (
    <>
      <Stack direction="column">
        <Typography variant="h2" gutterBottom>
          All Posts
        </Typography>
        <Typography variant="p">Collection of all the posts</Typography>
      </Stack>
      <Divider
        variant="middle"
        style={{ width: '100%' }}
        sx={{ margin: '2rem' }}
      />
      <PostsList posts={posts} />
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
