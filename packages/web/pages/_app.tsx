import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { RootContextProvider } from '../store/RootContext';
import GlobalStyles from '../styles';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </RootContextProvider>
  );
}
