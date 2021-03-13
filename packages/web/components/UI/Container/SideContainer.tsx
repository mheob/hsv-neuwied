import { Box, ChakraProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import theme, { breakpoints } from '../../../theme';
import { Breakpoint, getBreakpointInRemAsInteger } from '../../../theme/foundations/breakpoints';
import Container from '../../UI/Container';

type Props = {
  children?: ReactNode;
  side?: 'center' | 'left' | 'right';
} & ChakraProps;

export default function SideContainer({ children, side = 'center', ...all }: Props) {
  const { isMobile } = useMediaQuery(breakpoints.md);

  const getMargin = (position: 'left' | 'right', breakpoint: Breakpoint) => {
    switch (side) {
      case 'left':
        return position === 'left'
          ? '0'
          : `calc(100vw - ${getBreakpointInRemAsInteger(breakpoint) - 2.5}rem)`;
      case 'right':
        return position === 'left'
          ? `calc(100vw - ${getBreakpointInRemAsInteger(breakpoint) - 2.5}rem)`
          : '0';
      case 'center':
        return 'auto';
      default:
        throw new Error('The selected side does not exists.');
    }
  };

  return (
    <Box as="section" pos="relative" {...all}>
      <Container
        pos="relative"
        ml={{
          base: '0',
          sm: '2rem',
          md: getMargin('left', 'md'),
          lg: getMargin('left', 'lg'),
          xl: getMargin('left', 'xl'),
          '2xl': getMargin('left', '2xl'),
          '3xl': getMargin('left', '3xl'),
        }}
        mr={{
          base: '0',
          sm: '2rem',
          md: getMargin('right', 'md'),
          lg: getMargin('right', 'lg'),
          xl: getMargin('right', 'xl'),
          '2xl': getMargin('right', '2xl'),
          '3xl': getMargin('right', '3xl'),
        }}
        {...(isMobile ? { maxW: { base: 'full', sm: 'calc(100vw - 4rem)' } } : {})}
        bgColor={theme.colors.white}
        boxShadow="md"
      >
        <Box as="article" px={{ md: '24' }} py="12">
          {children}
        </Box>
      </Container>
    </Box>
  );
}
