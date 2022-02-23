import { ThemeProvider } from '@mui/material/styles';
import Layout from '../layout/layout';
import theme from '../ui/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
