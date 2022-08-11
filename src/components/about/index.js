import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function AboutSection() {
  return (
    <Stack direction="row">
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ marginLeft: '4rem', paddingTop: '2rem' }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/avatar.jpg"
          sx={{ width: 190, height: 200 }}
        />
        <Typography component="h3" variant="p">
          Author Name
        </Typography>
        <Typography variant="p" sx={{ color: 'gray' }}>
          Author Job
        </Typography>
        <Typography variant="p" sx={{ color: 'gray' }}>
          Company
        </Typography>
      </Stack>
      <Typography variant="p" sx={{ padding: '2rem', lineHeight: '2.5rem' }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet.., comes from a line in section
        1.10.32.
      </Typography>
    </Stack>
  );
}
