import * as React from 'react';
import { Chip, Grid, Avatar } from '@mui/material';
import NextLink from 'next/link';
import { convertToSlug } from '../../lib/slug';

export default function TagsList({ tags, showCount = true }) {
  console.log('TagsList -> tags', tags);
  const handleClick = () => {};
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      // alignItems="center"
      // justifyContent="center"
      // display="flex"
    >
      {Object.entries(tags).map((tag, i) => (
        <NextLink href={`/posts?tag=${convertToSlug(tag[0])}`} passHref key={i}>
          <Chip
            sx={{
              '& .MuiChip-root': {
                borderRadius: '2px',
              },
              '& .MuiAvatar-root': {
                color: 'white',
                lineHeight: '1rem',
              },
              '& .MuiChip-label': {
                textAlign: 'center',
                lineHeight: '1.9rem',
                // fontSize: '4rem',
              },
              margin: '0.5rem',
            }}
            label={`${tag[0]}`}
            onClick={handleClick}
            avatar={showCount ? <Avatar>{tag[1]}</Avatar> : ''}
            // onDelete={handleDelete}
            // sx={{ width: '250px' }}
          />
        </NextLink>
      ))}
    </Grid>
  );
}
