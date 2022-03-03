import React from 'react';
import Image from 'next/image';
import {
  Avatar,
  Grid,
  Stack,
  Typography,
  ListSubheader,
  ListItem,
  ListItemText,
} from '@mui/material';

const variantTypes = {
  preview: 'preview',
  date: 'date',
};
const variants = {
  preview: {
    imgWidth: 50,
    imgHeight: 50,
    isPreview: true,
  },
  date: {
    imgWidth: 70,
    imgHeight: 70,
    isPreview: false,
  },
};
const PostListItem = (props) => {
  const {
    image = 'https://source.unsplash.com/random',
    title = 'Title',
    preview = 'Preview',
    date = 'Feb 12',
    author = 'First Last',
    variant = 'preview',
  } = props;
  const { imgWidth, imgHeight, isPreview } = variants[variant] || 'preview';
  const subtitle = isPreview ? preview : `${author} - ${date}`;
  return (
    <div>
      <Grid container direction="row">
        <ListItem button>
          <Image src={image} alt="random" width={imgWidth} height={imgHeight} />
          <ListItemText
            primary={title}
            secondary={subtitle}
            sx={{ marginLeft: '10px' }}
          />
        </ListItem>
      </Grid>
    </div>
  );
};

export default PostListItem;
