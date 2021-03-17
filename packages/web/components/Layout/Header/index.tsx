import { useContext } from 'react';
import styled from 'styled-components';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import RootContext from '../../../store/RootContext';
import { mediaQuery } from '../../../styles';
import Container from '../../UI/Container';
import Heading from './Heading';
import Logo from './Logo';
import Navigation from './Navigation';

const HeaderStyled = styled.header`
  position: relative;
  z-index: 100;
  width: 100%;
  color: white;

  ${mediaQuery('lg')} {
    position: fixed;
  }
`;

const OuterBox = styled.div<{ isPinned?: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isPinned, theme }) =>
    isPinned ? theme.sizes.header.heightPinned : theme.sizes.header.height}px;
  background-color: ${({ theme }) => theme.colors.brand.dark};
  transition: all 200ms linear;

  ${mediaQuery('lg')} {
    position: ${({ isPinned }) => (isPinned ? 'fixed' : 'static')};
    clip-path: ${({ isPinned }) =>
      isPinned
        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        : 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 2.5vw))'};
  }
`;

const InnerBox = styled(Container)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${({ theme }) => theme.sizes.header.heightPinned}px;
    transition: all 200ms linear;
  }
`;

export default function Header() {
  const { isPinned } = useContext(RootContext);
  const isMobile = useMediaQuery('sm');

  return (
    <HeaderStyled>
      <Container>
        <Logo />
      </Container>

      <OuterBox isPinned={isPinned}>
        <InnerBox>
          {!isMobile && <Heading />}
          <Navigation />
        </InnerBox>
      </OuterBox>
    </HeaderStyled>
  );
}
