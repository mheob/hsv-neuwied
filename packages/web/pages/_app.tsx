import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { RootContextProvider } from '../store/RootContext';
import theme from '../theme';
import Styles from '../theme/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Styles />
        <Component {...pageProps} />
      </ChakraProvider>
    </RootContextProvider>
  );
}
