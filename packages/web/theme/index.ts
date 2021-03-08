import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';

export { breakpoints, mediaQuery } from './foundations/breakpoints';
export { sizes } from './foundations/sizes';

export default extendTheme({ ...foundations, components });
