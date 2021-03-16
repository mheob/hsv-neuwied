import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';
import { mediaQuery } from '.';

export default createGlobalStyle`
  ::selection {
    color: ${theme.colors.gray.light};
    background: ${theme.colors.brand.dark};
  }

  body {
    color: ${theme.colors.text};
    font-family: Montserrat, sans-serif;
    background-color: ${theme.colors.brand.dark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a,
  button {
    transition: 200ms;
  }

  main {
    position: relative;
    margin-bottom: ${theme.sizes.footer.height};
    padding-bottom: calc(102.5vw / 4.26667 + 10rem);
    overflow-x: hidden;
    background-color: ${theme.colors.gray.light};
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
      padding-top: calc(${theme.sizes.header.height} - 2.5vw);
    }
  }

  /* Accessibility */
  button:focus,
  select:focus {
    outline: none;
  }

  body.user-is-tabbing *:focus {
    outline: 2px solid royalblue !important;
    outline: 5px auto -webkit-focus-ring-color !important;
  }
`;
