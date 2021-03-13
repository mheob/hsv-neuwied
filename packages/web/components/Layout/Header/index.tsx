import { Box } from '@chakra-ui/react';
import { useContext } from 'react';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import RootContext from '../../../store/RootContext';
import theme, { breakpoints } from '../../../theme';
import Container from '../../UI/Container';
import Heading from './Heading';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  const { isPinned } = useContext(RootContext);
  const { isMobile } = useMediaQuery(breakpoints.sm);

  return (
    <Box
      as="header"
      color="white"
      position={{ base: 'relative', lg: 'fixed' }}
      w="full"
      zIndex="sticky"
    >
      <Container>
        <Logo />
      </Container>

      <Box
        pos={{ lg: isPinned ? 'fixed' : 'static' }}
        w="full"
        h={{ lg: isPinned ? theme.sizes.header.heightPinned : theme.sizes.header.height }}
        transition="all 200ms linear"
        bgColor="brand.dark"
        clipPath={{
          lg: isPinned
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2.5vw))',
        }}
      >
        <Container
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          h={theme.sizes.header.heightPinned}
          transition="all 200ms linear"
        >
          {!isMobile && <Heading />}
          <Navigation />
        </Container>
      </Box>
    </Box>
  );
}
