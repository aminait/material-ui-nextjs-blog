import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      // main: '#66bb6a',
      // dark: '#338a3e',
      // light: '#98ee99',
      main: '#00a5a3',
      dark: '#10676f',
      light: '#64fefb',
    },
    secondary: {
      main: '#000',
      dark: '#5c007a',
      light: '#c158dc',
    },
    neutral: {
      main: '#FAF9F6',
      contrastText: '#000000',
    },
    grey: {
      main: '#9e9e9e',
      dark: '#707070',
      light: '#cfcfcf',
    },
    developer: {
      main: '#000000',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      // '"Helvetica Neue"',
      // 'Roboto',
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Arial',
      'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
};

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export default theme;
