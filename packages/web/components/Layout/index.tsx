import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';

import pkg from '../../package.json';

import { initFocusRingOnlyOnTab } from '@utils/accessibility';
import { navigationBarState } from '@utils/navigation/scroll';

import Footer from './Footer';
import Header from './Header';

const APP_NAME = 'HSV Neuwied';

type Props = { title?: string; children: ReactNode };

export default function Layout({ children, title = 'Heimatsportverein Neuwied 2014' }: Props) {
  const limitPosition = 20;
  const [isPinned, setPinned] = useState(false);
  const [lastPosition, setLastPosition] = useState(0);

  const handleScroll = () => {
    const [pinned, position] = navigationBarState({
      limitPosition,
      pinned: isPinned,
      lastPosition,
    });
    setPinned(pinned);
    setLastPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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

      <Header isPinned={isPinned} />

      {/*
        // TODO: Remove the Box after testing and implementation
      */}
      <Box as="main" h="200vh">
        {children}
      </Box>

      <Footer />
    </>
  );
}
