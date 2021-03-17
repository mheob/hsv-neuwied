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

  a,
  button {
    cursor: pointer;
    transition: 200ms;
  }

  a {
    color: ${theme.colors.brand.base};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.brand.dark};
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
