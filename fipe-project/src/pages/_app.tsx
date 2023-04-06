import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@/styles/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Tabela Fipe</title>

        <link rel='shortcut icon' href='/img/icon-branding.webp' />
      </Head>
      <ThemeProvider>
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
