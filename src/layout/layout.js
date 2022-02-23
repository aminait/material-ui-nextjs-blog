import Navbar from './navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" direction="column">
        <Box
          sx={{
            // bgcolor: '#cfe8fc',
            height: '100vh',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <Grid container direction="row">
            {children}
          </Grid>
        </Box>
        <Box
          sx={{
            // bgcolor: '#cfe8fc',
            height: '100vh',
            padding: '10px',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Grid container direction="row">
            {children}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
