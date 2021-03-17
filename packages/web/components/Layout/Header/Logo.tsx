import NextLink from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';

import RootContext from '../../../store/RootContext';
import { mediaQuery } from '../../../styles';

const Link = styled.a<{ isPinned?: boolean }>`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    top: 10px;
    z-index: 103;
    width: 77px;
    height: 100px;
    background-image: url('/images/logos/hsv-neuwied-logo.min.svg');
    content: '';

    ${mediaQuery('lg')} {
      width: ${({ isPinned }) => (isPinned ? '102px' : '153px')};
      height: ${({ isPinned }) => (isPinned ? '133px' : '200px')};
      transition: all 200ms linear;
    }
  }
`;

export default function Logo() {
  const { isPinned } = useContext(RootContext);

  return (
    <NextLink href="/" passHref>
      <Link isPinned={isPinned} aria-label="Logo mit Link zur Home Page" />
    </NextLink>
  );
}
