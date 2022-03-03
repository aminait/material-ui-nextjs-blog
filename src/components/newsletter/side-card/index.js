import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Paper,
} from '@mui/material';
import SocialsList from '../../common/socials-list';
import FormShort from '../form-short';

const NewsletterSideCard = () => {
  return (
    <Paper sx={{ width: '300px' }}>
      <Card>
        <CardContent>
          <FormShort />
          <Divider flexItem />
        </CardContent>
        <CardActions>
          <Typography variant="caption">Share</Typography>
          <SocialsList direction="row" />
        </CardActions>
      </Card>
    </Paper>
  );
};

export default NewsletterSideCard;
