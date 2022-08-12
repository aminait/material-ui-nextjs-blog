import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CodeIcon from '@mui/icons-material/Code';
import { useResponsive } from '../../hooks/useResponsive';
import ToggleButtonNotEmpty from './toggleButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext } from '../../context/ThemeContext';

const FloatingActionButton = () => {
  const { isMobile } = useResponsive();
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Fab
        variant="extended"
        // color="developer"
        aria-label="add"
        href="https://github.com/aminait/fullstack-react-nextjs"
        target="_blank"
        disableRipple
        // elevation="0"
        // sx={{
        //   ':&hover': {
        //     color: 'red',
        //   },
        // }}
        sx={{
          margin: 0,
          top: 'auto',
          right: 40,
          bottom: 60,
          left: 'auto',
          position: 'fixed',
          //   background: 'linear-gradient(to right bottom, #000000, #8e24aa)',
          // backgroundColor: '#000000',
          color: theme === 'light' ? 'white' : 'black',
          backgroundColor: theme === 'light' ? 'black' : 'white',
          fontWeight: '15px',
          borderBottom: '1px solid #9e9e9e',
          borderColor: '#9e9e9e',
          zIndex: 1005,
          '&:hover': {
            backgroundColor: theme === 'light' ? 'black' : 'white',
          },
        }}
      >
        <GitHubIcon width={50} />
      </Fab>
    </Box>
  );
};

export default FloatingActionButton;
