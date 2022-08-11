import React from 'react';
import NavLayout from '../../layout/navLayout';
import { getAllTags } from '../../lib/posts-util';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TagsList from '../../components/tags/tags-list';
import { Typography, Divider } from '@mui/material';

const TagsPage = (props) => {
  const { tagCount } = props;
  console.log('TagsPage -> tagCount', Object.entries(tagCount));
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      justifyContent="center"
      display="flex"
    >
      <Typography variant="h2">Tags</Typography>
      <Divider orientation="vertical" flexItem />
      <TagsList tags={tagCount} />
    </Stack>
  );
};

export function getStaticProps() {
  const tagCount = getAllTags();

  return {
    props: {
      tagCount: tagCount,
    },
  };
}

TagsPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default TagsPage;
