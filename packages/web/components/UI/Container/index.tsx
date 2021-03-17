import { ReactNode } from 'react';
import styled from 'styled-components';

import { breakpoints, mediaQuery } from '../../../styles';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${mediaQuery('sm')} {
    max-width: ${breakpoints.sm}px;
  }

  ${mediaQuery('md')} {
    max-width: ${breakpoints.md}px;
  }

  ${mediaQuery('lg')} {
    max-width: ${breakpoints.lg}px;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  ${mediaQuery('xl')} {
    max-width: ${breakpoints.xl}px;
  }

  ${mediaQuery('2xl')} {
    max-width: ${breakpoints['2xl']}px;
  }

  ${mediaQuery('3xl')} {
    max-width: ${breakpoints['3xl']}px;
  }
`;

type Props = {
  children: ReactNode;
  className?: string;
};

export default function index({ children, className }: Props) {
  return <Container className={className}>{children}</Container>;
}
