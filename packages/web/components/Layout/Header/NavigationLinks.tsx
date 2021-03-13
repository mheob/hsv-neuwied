import { Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import theme, { breakpoints, mediaQuery } from '../../../theme';

export default function NavigationLinks() {
  const router = useRouter();

  const { isMobile } = useMediaQuery(breakpoints.lg);

  const isCurrentPage = (href: string) => href === router.pathname;
  const getActiveLinkColor = (href: string) => (isCurrentPage(href) ? 'brand.light' : 'white');
  const getActiveLinkHoverColor = (href: string) => (isCurrentPage(href) ? 'white' : 'brand.light');

  return (
    <Stack
      as="nav"
      direction={{ base: 'column', lg: 'row' }}
      alignItems="stretch"
      justifyContent="space-around"
      spacing={{ lg: '10' }}
      fontSize="md"
      pos={{ base: 'absolute', lg: 'unset' }}
      bottom="0"
      h={{ base: `calc(100vh - ${theme.sizes.header.heightPinned})`, lg: 'unset' }}
      w={{ base: 'full', lg: 'unset' }}
      py="12"
    >
      {isMobile && (
        <NextLink href="/" passHref>
          <LinkStyled
            color={getActiveLinkColor('/')}
            _hover={{ color: getActiveLinkHoverColor('/') }}
          >
            Home
          </LinkStyled>
        </NextLink>
      )}
      <NextLink href="/news" as="/news" passHref>
        <LinkStyled
          color={getActiveLinkColor('/news')}
          _hover={{ color: getActiveLinkHoverColor('/news') }}
        >
          Aktuelles
        </LinkStyled>
      </NextLink>
      <NextLink href="/soccer" as="/fussball" passHref>
        <LinkStyled
          color={getActiveLinkColor('/fussball')}
          _hover={{ color: getActiveLinkHoverColor('/fussball') }}
        >
          Fußball
        </LinkStyled>
      </NextLink>
      <NextLink href="/gymnastic" as="/turnen" passHref>
        <LinkStyled
          color={getActiveLinkColor('/turnen')}
          _hover={{ color: getActiveLinkHoverColor('/turnen') }}
        >
          Turnen
        </LinkStyled>
      </NextLink>
      <NextLink href="/dancing" as="/tanzen" passHref>
        <LinkStyled
          color={getActiveLinkColor('/tanzen')}
          _hover={{ color: getActiveLinkHoverColor('/tanzen') }}
        >
          Tanzen
        </LinkStyled>
      </NextLink>
      <NextLink href="/club" as="/verein" passHref>
        <LinkStyled
          color={getActiveLinkColor('/verein')}
          _hover={{ color: getActiveLinkHoverColor('/verein') }}
        >
          Verein
        </LinkStyled>
      </NextLink>
    </Stack>
  );
}

const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 1.5rem;
  text-align: center;

  ${mediaQuery('lg')} {
    padding: unset;
  }
`;
