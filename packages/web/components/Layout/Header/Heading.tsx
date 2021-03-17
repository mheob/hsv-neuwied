import NextLink from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';

import RootContext from '../../../store/RootContext';
import { mediaQuery } from '../../../styles';

const H1 = styled.h1<{ isPinned?: boolean }>`
  margin-left: 8rem;
  font-size: ${({ theme }) => theme.sizes.font.sm};
  font-family: ${({ theme }) => theme.fontFamily.brand};
  transition: all 200ms linear;

  ${mediaQuery('lg')} {
    ${({ isPinned }) => !isPinned && 'margin-left: 12rem;'}
    font-size: ${({ theme }) => theme.sizes.font.md};
  }

  ${mediaQuery('2xl')} {
    font-size: ${({ theme }) => theme.sizes.font.xl};
  }
`;

const Link = styled.a`
  color: white;
  line-height: 1.625;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.light};
  }
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.sizes.font.xs};

  ${mediaQuery('lg')} {
    font-size: ${({ theme }) => theme.sizes.font.sm};
  }

  ${mediaQuery('2xl')} {
    font-size: ${({ theme }) => theme.sizes.font.lg};
  }
`;

export default function Heading() {
  const { isPinned } = useContext(RootContext);

  return (
    <H1 isPinned={isPinned}>
      <NextLink href="/">
        <Link>
          Heimatsportverein
          <SubTitle>IN und FÜR Neuwied</SubTitle>
        </Link>
      </NextLink>
    </H1>
  );
}
