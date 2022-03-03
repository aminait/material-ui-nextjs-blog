import React from 'react';
import { Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const SocialsList = (props) => {
  return (
    <Stack {...props} display="flex" alignItems="space-between">
      <IconButton>
        <Twitter />
      </IconButton>
      <IconButton>
        <LinkedIn />
      </IconButton>
      <IconButton>
        <Facebook />
      </IconButton>
    </Stack>
  );
};

export default SocialsList;
