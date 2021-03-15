import { css } from 'styled-components';

import { Breakpoint, mediaQuery } from './breakpoints';

export function getTopSpacing(mt: string | { [key in Breakpoint]: string }) {
  let mediaQueryStyles = '';

  for (const [key, value] of Object.entries(mt)) {
    mediaQueryStyles += `
      ${mediaQuery(key as Breakpoint)} {
        margin-top: ${value};
      }
    `;
  }

  return css`
    ${mediaQueryStyles}
  `;
}
