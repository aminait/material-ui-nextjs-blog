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

const TabItems = (props) => {
  const { posts, hideTitles } = props;
  const [value, setValue] = React.useState(0);

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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {posts.map((post, index) => {
            return (
              <Tab
                label={post.type}
                key={`${post.type}-${index}`}
                {...a11yProps(index)}
              />
            );
          })}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      {posts.map((post, index) => {
        return (
          <TabPanel value={value} key={index} index={index}>
            <Grid container spacing={2} direction="row">
              {post.data.map((details, i) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <CardPost key={i} details={details} />
                  </Grid>
                );
              })}
            </Grid>
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabItems;
