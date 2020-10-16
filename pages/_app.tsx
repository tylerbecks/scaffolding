import 'antd/dist/antd.css';
import { Global, css } from '@emotion/core';
import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider, getSession } from 'next-auth/client';
import Layout from '../components/layout';
import AuthGateway from '../components/auth-gateway';
// import App from "next/app";

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Use the <Provider> to improve performance and allow components that call
  // `useSession()` anywhere in your application to access the `session` object.
  return (
    <>
      <Global styles={globalStyles} />

      <Provider session={pageProps.session}>
        <AuthGateway
          Page={
            <Layout>
              <Component {...pageProps} />
            </Layout>
          }
        />
      </Provider>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
