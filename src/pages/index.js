import React, { useEffect, useState } from 'react';
import { Grid, Stack, Dialog } from '@mui/material';
import RelatedPosts from '../components/posts/related';
import NavLayout from '../layout/navLayout';
import NewsletterSideCard from '../components/newsletter/side-card';
import { useResponsive } from '../hooks/useResponsive';
import NewsletterDialog from '../components/newsletter/dialog';
import TabItems from '../ui/tabs';
import posts from '../constants/mock/posts';
import { useDocumentTitle } from '../hooks';
const HomePage = () => {
  useDocumentTitle('Guide - All Posts');
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let timeOut = setTimeout(() => handleOpen(), 3000);
    return () => {
      timeOut = null;
      setOpen(false);
    };
  }, []);
  return (
    <div>
      <Grid container sx={{ height: '100vh' }}>
        <Grid>
          <TabItems posts={posts} hideTitles={true} />
        </Grid>
        <NewsletterDialog open={open} handleClose={handleClose} />
        {/* <Grid item>
          <Stack
            direction="column"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              right: '10vw',
              top: '15vh',
              width: '16vw',
            }}
          >
            {isMobile ? (
            ) : (
              <NewsletterSideCard />
            )}
            {/* <AuthorSideCard /> */}
        {/* <RelatedPosts /> */}
        {/* </Stack>
        </Grid>  */}
      </Grid>
    </div>
  );
};

HomePage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default HomePage;
