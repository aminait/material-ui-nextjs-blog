import * as React from 'react';
import Navbar from '../layout/navbar';
import NavLayout from '../layout/navLayout';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const ContactPage = () => {
  const [status, setStatus] = React.useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('pending');
    try {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        name: data.get('name'),
        message: data.get('message'),
      });

      const body = {
        email: data.get('email'),
        name: data.get('name'),
        message: data.get('message'),
      };
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // const message =  response.json();

      if (!response.ok) {
        setStatus('error');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Grid container component="div">
      <CssBaseline />
      <Image
        src={'/contact-illustration.png'}
        alt="contact-illustration"
        width={600}
        height={300}
        // layout="fill"
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Let us talk
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              type="test"
              id="message"
              autoComplete="current-message"
              multiline
              rows={5}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
          {status === 'success' && (
            <>
              <Alert severity="success" sx={{ width: '100%' }}>
                <AlertTitle>Success</AlertTitle>
                Message sent — <strong>thanks!</strong>
              </Alert>
            </>
          )}
          {status === 'error' && (
            <>
              <Alert severity="error" sx={{ width: '100%' }}>
                <AlertTitle>Oops!</AlertTitle>
                Something went wrong, please try again
              </Alert>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

ContactPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default ContactPage;
