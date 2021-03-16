import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      brand: {
        light: string;
        base: string;
        dark: string;
      };
      error: string;
      form: {
        input: {
          border: string;
          disabled: string;
          focus: string;
          radio: string;
        };
      };
      gray: {
        light: string;
        base: string;
        dark: string;
      };
      success: string;
      text: string;
    };

    fontFamily: {
      brand: string;
      default: string;
    };

    shadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };

    sizes: {
      font: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
      };
      footer: {
        height: number;
      };
      header: {
        height: number;
        heightPinned: number;
      };
      news: {
        slider: {
          imageHeightMobile: number;
          imageHeight: number;
          arrowSizeMobile: number;
          arrowSize: number;
        };
      };
    };
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
