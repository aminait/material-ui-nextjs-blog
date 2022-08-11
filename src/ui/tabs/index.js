import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography, Tab, Tabs } from '@mui/material';
import CardPost from '../cards';

{
  /* <Grid container spacing={4}>
  {cards.map((card) => (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <CardPost />
    </Grid>
  ))}
</Grid>; */
}
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

// Add props

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabs = ['Featured', 'Popular', 'Trending'];

const TabItems = (props) => {
  const { hideTitles, featuredPosts, popularPosts, trendingPosts } = props;
  console.log('TabItems -> featuredPosts', featuredPosts);
  const [value, setValue] = React.useState(0);
  console.log('TabItems -> value', value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: hideTitles ? 'none' : '',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, index) => {
            return (
              <Tab label={tab} key={`${tab}-${index}`} {...a11yProps(index)} />
            );
          })}
        </Tabs>
      </Box>

      <TabPanel value={value} key={0} index={0}>
        <Grid container spacing={2} direction="row">
          {featuredPosts.map((details, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <CardPost key={i} details={details} />
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} key={1} index={1}>
        <Grid container spacing={2} direction="row">
          {popularPosts.map((details, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <CardPost key={i} details={details} />
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} key={2} index={2}>
        <Grid container spacing={2} direction="row">
          {trendingPosts.map((details, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <CardPost key={i} details={details} />
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default TabItems;
