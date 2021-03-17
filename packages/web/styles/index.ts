import { createGlobalStyle } from 'styled-components';

import Base from './base';
import Fonts from './fonts';
import Reset from './reset';

export * from './breakpoints';
export * from './utils';

export default createGlobalStyle`
  ${Fonts}
  ${Reset}
  ${Base}
`;
