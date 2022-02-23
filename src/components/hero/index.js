import React from 'react';
import Image from 'next/image';
import { Grid, styled, Typography, Button } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';

// const StyledImage

const Hero = () => {
  const { rc } = useResponsive();
  return (
    <section>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Grid
            container
            // direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Typography gutterBottom variant="h4">
                {rc.hero.title}
              </Typography>
              <Typography gutterBottom variant="h6">
                {rc.hero.subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Button variant="contained" color="secondary" size="large">
                Create a blog
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Image
            src="/images/site/typing.gif"
            alt="hero illustation"
            width={700}
            height={600}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
