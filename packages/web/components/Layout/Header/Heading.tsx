import { Heading as ChakraHeading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = { isPinned?: boolean };

export default function Heading({ isPinned }: Props) {
  return (
    <ChakraHeading
      as="h1"
      ml={isPinned ? '32' : '44'}
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
