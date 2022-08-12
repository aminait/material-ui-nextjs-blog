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
import { Stack, Divider } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const NewsletterPage = () => {
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
    <>
      <CssBaseline />
      <Stack
        direction="column"
        alignItems={'center'}
        justifyContent={'center'}
        display="flex"
      >
        <Typography variant="h2" gutterBottom sx={{ margin: 'auto' }}>
          News
        </Typography>
      </Stack>
      <Image
        src={'/newsletter-illustration.svg'}
        alt="newsletter-illustration"
        width={600}
        height={300}
        // layout="fill"
      />
    </>
  );
};

NewsletterPage.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default NewsletterPage;
