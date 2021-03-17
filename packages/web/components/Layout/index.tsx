import Head from 'next/head';
import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

import pkg from '../../package.json';
import { mediaQuery } from '../../styles';
import { initFocusRingOnlyOnTab } from '../../utils/accessibility';
import Footer from './Footer';
import Header from './Header';

const APP_NAME = 'HSV Neuwied';

const Main = styled.main`
  position: relative;
  margin-bottom: ${({ theme }) => theme.sizes.footer.height}px;
  padding-bottom: calc(102.5vw / 4.26667 + 10rem);
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.gray.light};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));

  &::after {
    position: absolute;
    bottom: 10px;
    width: 100vw;
    height: calc(100vw / 4.26667);
    background: url('/images/banner/hsv-neuwied-banner.min.svg') no-repeat;
    content: '';
  }

  ${mediaQuery('lg')} {
    padding-top: calc(${({ theme }) => theme.sizes.header.height}px - 2.5vw);
  }
`;

type Props = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ children, title = 'Heimatsportverein Neuwied 2014' }: Props) {
  useEffect(() => {
    initFocusRingOnlyOnTab();
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={pkg.description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#366093" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon192.png" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/svg+xml" sizes="any" />
      </Head>

      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
}
