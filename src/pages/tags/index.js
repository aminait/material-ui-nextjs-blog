import React from 'react';
import NavLayout from '../../layout/navLayout';
import { getAllTags } from '../../lib/posts-util';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TagsList from '../../components/tags/tags-list';
import { Typography, Divider, Box, CssBaseline } from '@mui/material';
// import CssBaseline from '@mui/material';

const TagsPage = (props) => {
  const { tagCount } = props;
  console.log('TagsPage -> tagCount', Object.entries(tagCount));
  return (
    <>
      {/* <CssBaseline /> */}
      <Typography variant="h2" gutterBottom>
        Tags
      </Typography>
      <Grid
        container
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="center"
        display="flex"
        sx={{ margin: 'auto' }}
      >
        {/* <Box > */}

        <Divider style={{ width: '100%' }} />
        {/* </Box> */}
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <TagsList tags={tagCount} />
        </Grid>
      </Grid>
    </>
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
