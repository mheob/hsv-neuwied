import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '@theme';
import Styles from '@theme/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Styles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
