import React from 'react';
import Image from 'next/image';
import { Grid, styled, Typography, Button } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';
import SubscribeCard from './SubscribeCard';

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
        <Grid item xs={12} md={6} lg={7} xl={7}>
          <Grid
            container
            // direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Typography gutterBottom variant="h2">
                {rc.hero.title}
              </Typography>
              <Typography gutterBottom variant="h6">
                {rc.hero.subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={5}>
          {/*  <Image
            src="/images/site/typing.gif"
            alt="hero illustation"
            width={700}
            height={600}
          /> */}
          <SubscribeCard />
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
