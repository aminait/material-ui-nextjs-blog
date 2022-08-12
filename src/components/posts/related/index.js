import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Paper,
  Grid,
  TextField,
  IconButton,
  Avatar,
  Stack,
} from '@mui/material';
import { LinkedIn, Facebook, Twitter } from '@mui/icons-material';
import PostListItem from './postListItem';

const RelatedPosts = ({ relatedPosts }) => {
  console.log('RelatedPosts -> relatedPosts', relatedPosts);
  const { prev, next } = relatedPosts;
  return (
    <Grid container justifyContent="flex-end">
      <Paper>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // position: 'fixed',
            // right: '20vw',
            // top: '15vh',
            width: '16vw',
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Stack direction="column">
              {prev && (
                <>
                  <Typography variant="caption">Previous Post</Typography>
                  <PostListItem post={prev} />
                </>
              )}
              {next && (
                <>
                  <Typography variant="caption">Next Post</Typography>
                  <PostListItem post={next} />
                </>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default RelatedPosts;
