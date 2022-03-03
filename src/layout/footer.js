import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import { Tooltip } from '@mui/material';
const Footer = () => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: '100%', backgroundColor: 'black', zIndex: 1000 }}
      value={value}
      onChange={handleChange}
    >
      {/* TODO Add links */}
      <Tooltip title="Contact Me">
        <BottomNavigationAction
          sx={{ color: 'gray' }}
          icon={<ContactPageIcon />}
        />
      </Tooltip>
      <Tooltip title="View Me On">
        <BottomNavigationAction
          sx={{ color: 'gray' }}
          icon={<LinkedInIcon />}
        />
      </Tooltip>
      <Tooltip title="About Me">
        <BottomNavigationAction sx={{ color: 'gray' }} icon={<LinkIcon />} />
      </Tooltip>
      <Tooltip title="Hire Me">
        <BottomNavigationAction sx={{ color: 'gray' }} icon={<WorkIcon />} />
      </Tooltip>
    </BottomNavigation>
  );
};

export default Footer;
