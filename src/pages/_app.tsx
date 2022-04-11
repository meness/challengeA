import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import '~assets/styles/theme.css';
import store from '~store/store';

const AppPage = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>Challenge</title>
      </Head>

      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
};

const AppPageWrapper = (props: AppProps) => {
  return (
    <Provider store={store}>
      <UserProvider>
        <AppPage {...props} />
      </UserProvider>
    </Provider>
  );
};

export default AppPageWrapper;
