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
    picture = 'https://source.unsplash.com/random',
    title = 'Title',
    excerpt = 'Preview',
    date = 'Feb 12',
    author = 'First Last',
    variant = 'preview',
    slug,
  } = props.post;
  const imagePath = `/images/posts/${slug}/${picture}`;
  return (
    <div>
      <Grid container direction="row">
        <ListItem button>
          <Image
            src={picture ? imagePath : ''}
            width={70}
            height={70}
            alt=""
            sx={{ margin: 0, padding: 0 }}
          />
          <ListItemText
            primary={title}
            secondary={`${excerpt.split(' ').slice(0, 5).join(' ')}...`}
            sx={{ marginLeft: '10px' }}
          />
        </ListItem>
      </Grid>
    </div>
  );
};

export default PostListItem;
