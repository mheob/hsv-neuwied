import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext } from 'react';

import RootContext from '../../../store/RootContext';
import theme from '../../../theme';

export default function Logo() {
  const { isPinned } = useContext(RootContext);

  return (
    <NextLink href="/" passHref>
      <Link
        pos="relative"
        d="block"
        w="full"
        h="full"
        maxW="3xl"
        _after={{
          pos: 'absolute',
          top: '10px',
          w: { base: '77px', lg: isPinned ? '102px' : '153px' },
          h: { base: '100px', lg: isPinned ? '133px' : '200px' },
          backgroundImage: 'url("/images/logos/hsv-neuwied-logo.min.svg")',
          content: '""',
          zIndex: theme.zIndices.skipLink,
          transition: 'all 200ms linear',
        }}
        aria-label="Logo mit Link zur Home Page"
      />
    </NextLink>
  );
}
