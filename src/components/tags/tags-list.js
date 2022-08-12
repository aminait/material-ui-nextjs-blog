import * as React from 'react';
import { Chip, Stack, Avatar } from '@mui/material';
import NextLink from 'next/link';
import { convertToSlug } from '../../lib/slug';

export default function TagsList({ tags, showCount = true }) {
  console.log('TagsList -> tags', tags);
  const handleClick = () => {};
  return (
    <Stack
      direction="row"
      spacing={2}
      // alignItems="center"
      // justifyContent="center"
      // display="flex"
    >
      {Object.entries(tags).map((tag, i) => (
        <NextLink href={`/tags/${convertToSlug(tag[0])}`} passHref key={i}>
          <Chip
            sx={{
              '& .MuiChip-root': {
                borderRadius: '2px',
              },
            }}
            label={`${tag[0]}`}
            onClick={handleClick}
            avatar={showCount ? <Avatar>{tag[1]}</Avatar> : ''}
            // onDelete={handleDelete}
            // sx={{ width: '250px' }}
          />
        </NextLink>
      ))}
    </Stack>
  );
}
