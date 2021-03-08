import { Box, Container, useMediaQuery } from '@chakra-ui/react';

import theme, { breakpoints } from '@theme';

import Heading from './Heading';
import Logo from './Logo';
import Navigation from './Navigation';

type Props = { isPinned?: boolean };

export default function Header({ isPinned }: Props) {
  const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.sm})`);

  return (
    <Box
      as="header"
      color="white"
      position={{ base: 'relative', lg: 'fixed' }}
      w="full"
      zIndex="sticky"
    >
      <Logo isPinned={isPinned} />

      <Box
        pos={isPinned ? 'fixed' : 'static'}
        w="full"
        h={isPinned ? theme.sizes.header.heightPinned : theme.sizes.header.height}
        transition="all 200ms linear"
        bgColor="brand.dark"
        clipPath={
          isPinned
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2.5vw))'
        }
      >
        <Container
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          maxW="6xl"
          h={theme.sizes.header.heightPinned}
          transition="all 200ms linear"
        >
          {!isMobile && <Heading isPinned={isPinned} />}
          <Navigation isMobile={isMobile} />
        </Container>
      </Box>
    </Box>
  );
}
