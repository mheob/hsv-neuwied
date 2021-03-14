import 'styled-components';

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
          arrowSize: number;
        };
      };
    };
  }
}
