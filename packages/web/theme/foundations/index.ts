import { createBreakpoints } from '@chakra-ui/theme-tools';

import colors from './colors';
import breakpoints from './breakpoints';
import sizes from './sizes';
import typography from './typography';

export default {
  colors,
  breakpoints: createBreakpoints(breakpoints),
  sizes,
  ...typography,
};
