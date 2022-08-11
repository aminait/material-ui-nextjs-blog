import { useState, useEffect } from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';
import theme from '../ui/theme';
import FloatingActionButton from '../ui/buttons/fab';
import Head from 'next/head';
import { lightTheme, darkTheme } from '../ui/theme';
import BaseTheme from '../ui/theme';
import { ThemeContext } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <ThemeProvider
        theme={
          // window.localStorage.getItem('mode') === 'light'
          //   ? createTheme(lightTheme)
          //   : createTheme(darkTheme)
          darkMode ? createTheme(darkTheme) : createTheme(lightTheme)
        }
      > */}
      <ThemeContext.Provider value={value}>
        <BaseTheme>
          <FloatingActionButton />
          {getLayout(<Component {...pageProps} />)}
        </BaseTheme>
      </ThemeContext.Provider>

      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
