import { Global } from '@emotion/react';

import styles from '../foundations';

export default function Base() {
  return (
    <Global
      styles={`
        ::selection {
          color: ${styles.colors.gray.light};
          background: ${styles.colors.brand.dark};
        }

        body {
          color: ${styles.colors.text};
          font-family: Montserrat, sans-serif;
          background-color: ${styles.colors.brand.dark};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
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
    `}
    />
  );
}
