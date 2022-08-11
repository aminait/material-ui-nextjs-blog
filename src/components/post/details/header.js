import React from 'react';
import { useResponsive } from '../../../hooks/useResponsive';
import { Grid, Typography, CssBaseline } from '@mui/material';
import BriefInfo from '../../author/brief-info';
import { useRouter } from 'next/router';

const PostDetailsHeader = (props) => {
  const {
    image, // TODO add header image
    // title = 'This is the next revolutionary tech',
    author = 'Sam Smith',
  } = props;
  const { isMobile } = useResponsive();
  const router = useRouter();
  console.log('PostDetailsHeader -> router', router);
  const { slug } = router.query;
  console.log('PostDetailsHeader -> slug', slug);
  return (
    <>
      <CssBaseline />

      <Grid
        spacing={0}
        sx={{
          height: '35vh',
          backgroundColor: 'black',
          color: 'white',
          position: 'relative',
          marginBottom: '5vh',
        }}
        alignItems="center"
        display="flex"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="h2">{slug}</Typography>
        <Typography variant="h5">
          {isMobile ? <BriefInfo /> : author}
        </Typography>
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

export default PostDetailsHeader;
