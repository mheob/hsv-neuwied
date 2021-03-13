import { useMediaQuery as ChakraUseMediaQuery } from '@chakra-ui/media-query';

import { breakpoints } from '../theme';

type Breakpoint = typeof breakpoints | string;
type Direction = 'max' | 'min';

export function useMediaQuery(breakpoint: Breakpoint, direction: Direction = 'max') {
  const [isChakraMobile] = ChakraUseMediaQuery(`(${direction}-width: ${breakpoint})`);
  const isMobile = direction === 'max' ? isChakraMobile : !isChakraMobile;
  return { isMobile };
}
