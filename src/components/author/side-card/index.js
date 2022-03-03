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
import BriefInfo from '../brief-info';

//  this is not used in responsive mobile view
const AuthorSideCard = () => {
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
            <BriefInfo />
            <Button fullWidth variant="contained">
              Follow
            </Button>
          </CardContent>
          <CardActions>
            <Typography variant="caption">Share</Typography>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Facebook />
            </IconButton>
            {/* <Button size="small" color="secondary">
              View
            </Button>
            <Button size="small" color="secondary">
              Edit
            </Button> */}
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default AuthorSideCard;
