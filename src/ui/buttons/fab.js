import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CodeIcon from '@mui/icons-material/Code';
import { useResponsive } from '../../hooks/useResponsive';
import ToggleButtonNotEmpty from './toggleButton';

const FloatingActionButton = () => {
  const { isMobile } = useResponsive();
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab
        variant="extended"
        // color="developer"
        aria-label="add"
        href="/developers"
        disableRipple
        elevation="0"
        // sx={{
        //   ':&hover': {
        //     color: 'red',
        //   },
        // }}
        sx={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
          //   background: 'linear-gradient(to right bottom, #000000, #8e24aa)',
          // backgroundColor: '#000000',
          color: '#ffffff',
          fontWeight: '15px',
          borderBottom: '1px solid #9e9e9e',
          borderColor: '#9e9e9e',
          zIndex: 1005,
        }}
      >
        {isMobile ? (
          <CodeIcon />
        ) : (
          <>
            {/* <CodeIcon sx={{ mr: 1 }} /> Documentation */}
            <ToggleButtonNotEmpty />
          </>
        )}
      </Fab>
    </Box>
  );
};

export default FloatingActionButton;
