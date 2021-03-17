import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { mediaQuery } from '../../styles';
import Container from '../UI/Container';

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: -1;
  width: 100%;
  margin: 3rem 0;
  color: white;
`;

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.sm};

  ${mediaQuery('lg')} {
    font-size: ${({ theme }) => theme.sizes.font.md};
  }

  ${mediaQuery('2xl')} {
    font-size: ${({ theme }) => theme.sizes.font.xl};
  }
`;

const CopyrightText = styled.span`
  margin-right: 0.5rem;
`;

const Link = styled.a<{ isActive: boolean }>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.brand.light : 'white')};

  &:hover {
    color: ${({ isActive, theme }) => (isActive ? 'white' : theme.colors.brand.light)};
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.sizes.font.sm};

  ${mediaQuery('sm')} {
    flex-direction: row;

    > * ~ * {
      margin-left: 1rem;
    }
  }

  ${mediaQuery('lg')} {
    font-size: ${({ theme }) => theme.sizes.font.md};

    > * ~ * {
      margin-left: 2.5rem;
    }
  }

  ${mediaQuery('2xl')} {
    font-size: ${({ theme }) => theme.sizes.font.xl};
  }
`;

export default function Footer() {
  const router = useRouter();

  const isLinkToCurrentPage = (href: string) => href === router.pathname;

  return (
    <FooterStyled>
      <ContainerStyled>
        <Copyright>
          <CopyrightText>&copy; 2014 &ndash; {new Date().getFullYear()}</CopyrightText>
          <NextLink href="/">
            <Link isActive={isLinkToCurrentPage('/')}>HSV Neuwied</Link>
          </NextLink>
        </Copyright>

        <Navigation>
          <NextLink href="/imprint" as="/impressum">
            <Link isActive={isLinkToCurrentPage('/imprint')}>Impressum</Link>
          </NextLink>
          <NextLink href="/privacy" as="/datenschutz">
            <Link isActive={isLinkToCurrentPage('/privacy')}>Datenschutz</Link>
          </NextLink>
        </Navigation>
      </ContainerStyled>
    </FooterStyled>
  );
}
