import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import theme from '@theme';

type Props = { isPinned?: boolean };

export default function Logo({ isPinned }: Props) {
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
          left: '30px',
          w: { base: '77px', lg: isPinned ? '102px' : '153px' },
          h: { base: '100px', lg: isPinned ? '133px' : '200px' },
          backgroundImage: 'url("/images/logos/hsv-neuwied-logo.min.svg")',
          content: '""',
          zIndex: theme.zIndices.skipLink,
          transition: 'all 200ms linear',
        }}
      />
    </NextLink>
  );
}
