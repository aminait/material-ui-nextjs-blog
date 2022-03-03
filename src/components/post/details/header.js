import React from 'react';
import { useResponsive } from '../../../hooks/useResponsive';
import { Grid, Typography, CssBaseline } from '@mui/material';
import BriefInfo from '../../author/brief-info';

const PostDetailsHeader = (props) => {
  const {
    image, // TODO add header image
    title = 'This is the next revolutionary tech',
    author = 'Sam Smith',
  } = props;
  const { isMobile } = useResponsive();
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
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h5">
          {isMobile ? <BriefInfo /> : author}
        </Typography>
      </Grid>
    </>
  );
};

export default PostDetailsHeader;
