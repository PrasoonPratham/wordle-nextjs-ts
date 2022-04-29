import { NextSeo } from 'next-seo';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@fontsource/poppins';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextSeo
          title="Wordle Helper"
          description="Wordle Helper is a tool to help you solve wordle puzzles."
          openGraph={{
            url: 'https://wordlehelper.prathamprasoon.com',
            title: 'Wordle Helper',
            description:
              'Wordle Helper is a tool to help you solve wordle puzzles.',
            images: [
              {
                url: 'https://raw.githubusercontent.com/PrasoonPratham/wordle-nextjs-ts/main/public/wordle.png',
                width: 1280,
                height: 720,
                alt: 'Wordle Helper'
              }
            ]
          }}
          twitter={{
            handle: '@prasoonpratham',
            cardType: 'summary_large_image'
          }}
        />
        <Toaster position="top-right" reverseOrder={false} />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
