import React from 'react';
import NavLayout from '../layout/navLayout';
import AboutSection from '../components/about';
import { Stack, Typography, Divider } from '@mui/material';

const AboutPage = () => {
  return (
    <>
      <Stack direction="column">
        <Typography variant="h2">About</Typography>
      </Stack>
      <Divider
        variant="middle"
        style={{ width: '100%' }}
        sx={{ margin: '2rem' }}
      />
      <AboutSection />
    </>
  );
};
AboutPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default AboutPage;
