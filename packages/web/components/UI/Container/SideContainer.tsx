import { ReactNode } from 'react';
import styled from 'styled-components';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Breakpoint, breakpoints, getTopSpacing, mediaQuery } from '../../../styles';
import Container from '../../UI/Container';

const getMargin = (
  position: 'left' | 'right',
  breakpoint: Breakpoint,
  side?: 'center' | 'left' | 'right'
) => {
  switch (side) {
    case 'left':
      return position === 'left' ? '0' : `calc(100vw - ${breakpoints[breakpoint]}px - 2.5rem)`;
    case 'right':
      return position === 'left' ? `calc(100vw - ${breakpoints[breakpoint]}px - 2.5rem)` : '0';
    case 'center':
    default:
      return 'auto';
  }
};

type SectionProps = {
  mt?: string | { [key in Breakpoint]?: string };
};

const Section = styled.section<SectionProps>`
  position: relative;

  ${({ mt }) => mt && getTopSpacing(mt)}
`;

type SectionContainerProps = {
  isMobile?: boolean;
  side?: 'center' | 'left' | 'right';
};

const SectionContainer = styled(Container)<SectionContainerProps>`
  position: relative;
  margin-right: 0;
  margin-left: 0;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${({ isMobile }) => isMobile && 'max-width: 100%'}

  ${mediaQuery('sm')} {
    margin-right: 2rem;
    margin-left: 2rem;

    ${({ isMobile }) => isMobile && 'max-width: calc(100vw - 4rem)'}
  }

  ${mediaQuery('md')} {
    margin-right: ${({ side }) => getMargin('right', 'md', side)};
    margin-left: ${({ side }) => getMargin('left', 'md', side)};
  }

  ${mediaQuery('lg')} {
    margin-right: ${({ side }) => getMargin('right', 'lg', side)};
    margin-left: ${({ side }) => getMargin('left', 'lg', side)};
  }

  ${mediaQuery('xl')} {
    margin-right: ${({ side }) => getMargin('right', 'xl', side)};
    margin-left: ${({ side }) => getMargin('left', 'xl', side)};
  }

  ${mediaQuery('2xl')} {
    margin-right: ${({ side }) => getMargin('right', '2xl', side)};
    margin-left: ${({ side }) => getMargin('left', '2xl', side)};
  }

  ${mediaQuery('3xl')} {
    margin-right: ${({ side }) => getMargin('right', '3xl', side)};
    margin-left: ${({ side }) => getMargin('left', '3xl', side)};
  }
`;

type Props = {
  children?: ReactNode;
  side?: 'center' | 'left' | 'right';
} & SectionProps;

export default function SideContainer({ children, side = 'center', mt }: Props) {
  const isMobile = useMediaQuery('md');

  return (
    <Section mt={mt}>
      <SectionContainer isMobile={isMobile} side={side}>
        {children}
      </SectionContainer>
    </Section>
  );
}
