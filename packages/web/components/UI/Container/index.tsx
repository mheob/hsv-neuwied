import { Container, ContainerProps } from '@chakra-ui/react';

import { breakpoints } from '../../../theme';
import { getBreakpointInRemAsInteger } from '../../../theme/foundations/breakpoints';

export default function index({ children, ...all }: ContainerProps) {
  return (
    <Container
      maxW={{
        base: breakpoints.sm,
        sm: `${getBreakpointInRemAsInteger('sm') - 2.5}rem`,
        md: `${getBreakpointInRemAsInteger('md') - 2.5}rem`,
        lg: `${getBreakpointInRemAsInteger('lg') - 2.5}rem`,
        xl: `${getBreakpointInRemAsInteger('xl') - 2.5}rem`,
        '2xl': `${getBreakpointInRemAsInteger('2xl') - 2.5}rem`,
        '3xl': `${getBreakpointInRemAsInteger('3xl') - 2.5}rem`,
      }}
      {...all}
    >
      {children}
    </Container>
  );
}
