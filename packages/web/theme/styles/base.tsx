import { Global } from '@emotion/react';

import styles from '@theme/foundations';

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

        a,
        button {
          transition: 200ms;
        }

        main {
          position: relative;
          margin-bottom: ${styles.sizes.footer.height};
          padding-bottom: calc(102.5vw / 4.26667 + 10rem);
          overflow-x: hidden;
          background-color: ${styles.colors.gray.light};
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));

          &::after {
            position: absolute;
            bottom: 10px;
            width: 100vw;
            height: calc(100vw / 4.26667);
            background: url('/images/banner/hsv-neuwied-banner.min.svg') no-repeat;
            content: '';
          }

          @media only screen and (max-width: 600px) {
            padding-top: calc(${styles.sizes.header.height} - 2.5vw);
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
    `}
    />
  );
}
