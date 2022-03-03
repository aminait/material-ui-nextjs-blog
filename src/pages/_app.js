import { ThemeProvider } from '@mui/material/styles';
import theme from '../ui/theme';
import FloatingActionButton from '../ui/buttons/fab';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <FloatingActionButton />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
