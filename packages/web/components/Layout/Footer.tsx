import { Box, Container, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const isLinkToCurrentPage = (href: string) => href === router.pathname;

  return (
    <Box as="footer" pos="fixed" bottom="0" w="full" my="12" color="white" zIndex="hide">
      <Container d="flex" justifyContent="space-between" maxW="6xl">
        <Box fontSize={{ base: 'sm', lg: 'md', '2xl': 'xl' }}>
          <Text as="span" mr="2">
            &copy; 2014 &ndash; {new Date().getFullYear()}
          </Text>
          <NextLink href="/" passHref>
            <Link
              color={`${isLinkToCurrentPage('/') ? 'brand.light' : 'white'}`}
              _hover={{ color: `${isLinkToCurrentPage('/') ? 'white' : 'brand.light'}` }}
            >
              HSV Neuwied
            </Link>
          </NextLink>
        </Box>

        <Stack
          as="nav"
          direction={{ base: 'column', sm: 'row' }}
          alignItems="flex-end"
          fontSize={{ base: 'sm', lg: 'md', '2xl': 'xl' }}
          spacing={{ sm: '4', lg: '10' }}
        >
          <NextLink href="/imprint" as="/impressum" passHref>
            <Link
              color={`${isLinkToCurrentPage('/imprint') ? 'brand.light' : 'white'}`}
              _hover={{ color: `${isLinkToCurrentPage('/imprint') ? 'white' : 'brand.light'}` }}
            >
              Impressum
            </Link>
          </NextLink>
          <NextLink href="/privacy" as="/datenschutz">
            <Link
              color={`${isLinkToCurrentPage('/privacy') ? 'brand.light' : 'white'}`}
              _hover={{ color: `${isLinkToCurrentPage('/privacy') ? 'white' : 'brand.light'}` }}
            >
              Datenschutz
            </Link>
          </NextLink>
        </Stack>
      </Container>
    </Box>
  );
}
