import { Layout } from '@budget-tracker/components/layout/layout';
import '@budget-tracker/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
