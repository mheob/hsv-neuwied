import { Heading as ChakraHeading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext } from 'react';

import RootContext from '../../../store/RootContext';

export default function Heading() {
  const { isPinned } = useContext(RootContext);

  return (
    <ChakraHeading
      as="h1"
      ml={{ base: '32', lg: isPinned ? '32' : '48' }}
      fontFamily="brand"
      fontSize={{ base: 'sm', lg: 'md', '2xl': 'xl' }}
      transition="all 200ms linear"
    >
      <NextLink href="/" passHref>
        <Link color="white" _hover={{ color: 'brand.light' }} lineHeight="tall">
          Heimatsportverein
          <Text as="span" d="block" fontSize={{ base: 'xs', lg: 'sm', '2xl': 'lg' }}>
            IN und FÜR Neuwied
          </Text>
        </Link>
      </NextLink>
    </ChakraHeading>
  );
}
