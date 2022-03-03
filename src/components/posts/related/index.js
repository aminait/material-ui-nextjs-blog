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

const RelatedPosts = () => {
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
            <Typography variant="body1">More by author</Typography>

            <Stack direction="column">
              <PostListItem />
              <PostListItem />
              <PostListItem />
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default RelatedPosts;
