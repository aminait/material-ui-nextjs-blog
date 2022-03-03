import React from 'react';
import { Stack, Avatar, Typography } from '@mui/material';

const BriefInfo = (props) => {
  const { name='Sam Smith' } = props;
  return (
    <div>
      <Stack direction="row">
        <Avatar />
        <Typography>{name}</Typography>
      </Stack>
    </div>
  );
};

export default BriefInfo;
