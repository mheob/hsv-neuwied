import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import styled from 'styled-components';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaQuery } from '../../../styles';
import { toggleScrollingState } from '../../../utils/navigation/scroll';
import NavigationLinks from './NavigationLinks';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${mediaQuery('lg')} {
    align-items: flex-end;
  }
`;

const ClosingOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 102;
`;

const Button = styled.button`
  z-index: 103;
  padding: 0;
`;

export default function Navigation() {
  const isMobile = useMediaQuery('lg');

  const [drawerIsOpenState, setDrawerIsOpenState] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpenState(!drawerIsOpenState);
    toggleScrollingState(!drawerIsOpenState);
  };

  const closeDrawer = () => {
    setDrawerIsOpenState(false);
    toggleScrollingState(false);
  };

  return (
    <Container>
      {isMobile ? (
        <>
          {drawerIsOpenState && <ClosingOverlay onClick={closeDrawer}></ClosingOverlay>}

          <Button onClick={toggleDrawer} type="button" aria-label="open menu">
            <IoMenu size="3rem" />
          </Button>

          <NavigationLinks isOpen={drawerIsOpenState} />
        </>
      ) : (
        <NavigationLinks />
      )}
    </Container>
  );
}
