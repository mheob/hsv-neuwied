import { css } from 'styled-components';

import { theme } from './theme';

export default css`
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

  a {
    text-decoration: none;
  }

  a,
  button {
    transition: 200ms;
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
