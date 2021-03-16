import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    brand: {
      light: '#9db9dc',
      base: '#366093',
      dark: '#1a2e46',
    },
    error: '#e01a1a',
    form: {
      input: {
        border: '#366093',
        disabled: 'rgba(0, 0, 0, 0.42)',
        focus: '#366093',
        radio: '#5a5a5a',
      },
    },
    gray: {
      light: '#fafafa',
      base: '#c5c5c5',
      dark: '#5a5a5a',
    },
    success: '#047504',
    text: '#272f38',
  },

  fontFamily: {
    brand: 'Baveuse, serif',
    default:
      'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },

  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  sizes: {
    font: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    footer: {
      height: 200, // px
    },
    header: {
      height: 190, // px
      heightPinned: 100, // px
    },
    news: {
      slider: {
        imageHeightMobile: 50, // vh
        imageHeight: 70, // vh
        arrowSizeMobile: 80, // px
        arrowSize: 100, // px
      },
    },
  },
};
