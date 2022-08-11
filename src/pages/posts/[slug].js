import React, { Fragment } from 'react';
import { Stack, Grid, Box } from '@mui/material';
import AuthorSideCard from '../../components/author/side-card';
import RelatedPosts from '../../components/posts/related';
import PostSideActions from '../../components/post/side-actions';
import PostDetails from '../../components/post/details';
import PostDetailsHeader from '../../components/post/details/header';
import Reactions from '../../components/post/reactions';
import ReadMore from '../../components/post/read-more';
import Comments from '../../components/post/comments';
import NoNavBar from '../../layout/noNavLayout';
import Navbar from '../../layout/navbar';
import { convertToSlug } from '../../lib/slug';
import { useRouter } from 'next/router';
// import Head from 'next';
import { getPostData, getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';
const PostDetailsPage = (props) => {
  // useDocumentTitle('Guide - A');
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.exerpt} />
      </Head>
      <Grid container sx={{ height: '100vh' }} direction="row">
        <Box display={{ sm: 'none', md: 'flex' }}>
          <Grid
            item
            direction="column"
            justifyContent="center"
            alignItems="space-between"
            spacing={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
            }}
            md={3}
            lg={3}
            xl={3}
          >
            {/* <Stack
              direction="column"
              justifyContent="center"
              alignItems="space-between"
              spacing={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
              }}
            > */}
            <PostSideActions />
            {/* </Stack> */}
          </Grid>
        </Box>
        <Grid
          item
          md={7}
          lg={7}
          xl={7}
          sx={{
            marginLeft: '5vw',
          }}
        >
          <PostDetails post={props.post} />
          <Reactions />
          <Comments />
          <ReadMore />
        </Grid>
        {/* <Grid item> */}
        <Box display={{ sm: 'none', md: 'flex' }}>
          <Stack
            direction="column"
            // justifyContent="center"
            // alignItems="flex-start"
            // alignItems="space-between"
            display="flex"
            spacing={2}
            // sx={{
            //   // position: 'fixed',
            //   right: '20vw',
            //   // top: '15vh',
            //   width: '16vw',
            // }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '20px',
              // position: 'fixed',
            }}
            md={2}
            lg={2}
            xl={2}
          >
            <RelatedPosts />
          </Stack>
        </Box>
        {/* </Grid> */}
      </Grid>
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: convertToSlug(post.title) },
  }));

  return { paths, fallback: false };
}

PostDetailsPage.getLayout = (page) => {
  return (
    <Fragment>
      <Navbar />
      <PostDetailsHeader />
      <NoNavBar>{page}</NoNavBar>
    </Fragment>
  );
};

export default PostDetailsPage;
