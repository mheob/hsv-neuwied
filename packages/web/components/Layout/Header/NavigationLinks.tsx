import NextLink from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaQuery } from '../../../styles';

const Navigation = styled.nav<{ isOpen?: boolean }>`
  position: absolute;
  bottom: ${({ isOpen, theme }) =>
    isOpen
      ? `calc(-100vh + ${theme.sizes.header.heightPinned}px)`
      : `${theme.sizes.header.heightPinned}px`};
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.sizes.header.heightPinned});
  padding: 3rem 0;
  font-size: ${({ theme }) => theme.sizes.font.md};
  background-color: ${({ theme }) => theme.colors.brand.dark};
  transition: 500ms ease bottom;

  ${mediaQuery('lg')} {
    position: unset;
    flex-direction: row;
    width: unset;
    height: unset;

    > * ~ * {
      margin-left: 2.5rem;
    }
  }
`;

const LinkStyled = styled.a<{ isActive: boolean }>`
  display: inline-block;
  padding: 1.5rem;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.brand.light : 'white')};
  text-align: center;

  &:hover {
    color: ${({ isActive, theme }) => (isActive ? 'white' : theme.colors.brand.light)};
  }

  ${mediaQuery('lg')} {
    padding: unset;
  }
`;

type Props = { isOpen?: boolean };

export default function NavigationLinks({ isOpen }: Props) {
  const router = useRouter();

  const isMobile = useMediaQuery('lg');

  const isCurrentPage = (href: string) => href === router.pathname;

  return (
    <Navigation isOpen={isOpen}>
      {isMobile && (
        <NextLink href="/" passHref>
          <LinkStyled isActive={isCurrentPage('/')}>Home</LinkStyled>
        </NextLink>
      )}
      <NextLink href="/news" as="/news" passHref>
        <LinkStyled isActive={isCurrentPage('/news')}>Aktuelles</LinkStyled>
      </NextLink>
      <NextLink href="/soccer" as="/fussball" passHref>
        <LinkStyled isActive={isCurrentPage('/fussball')}>Fußball</LinkStyled>
      </NextLink>
      <NextLink href="/gymnastic" as="/turnen" passHref>
        <LinkStyled isActive={isCurrentPage('/turnen')}>Turnen</LinkStyled>
      </NextLink>
      <NextLink href="/dancing" as="/tanzen" passHref>
        <LinkStyled isActive={isCurrentPage('/tanzen')}>Tanzen</LinkStyled>
      </NextLink>
      <NextLink href="/club" as="/verein" passHref>
        <LinkStyled isActive={isCurrentPage('/verein')}>Verein</LinkStyled>
      </NextLink>
    </Navigation>
  );
}
