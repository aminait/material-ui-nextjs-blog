import React, { Fragment } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const FormShort = () => {
  return (
    <Fragment>
      <Box sx={{ margin: '5px' }}>
        <Typography variant="h5" component="h2">
          Sign up to our newsletter
        </Typography>
        <Typography variant="caption">
          Get the latest article on all things delivered straight to your inbox.
        </Typography>
      </Box>
      <TextField sx={{ margin: '5px' }} placeholder="Your email" />
      <Button sx={{ margin: '5px' }} variant="outlined">
        Subscribe
      </Button>
    </Fragment>
  );
};

export default FormShort;
