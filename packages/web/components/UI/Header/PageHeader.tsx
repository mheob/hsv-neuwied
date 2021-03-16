import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { mediaQuery } from '../../../styles';
import { getRgbaStringFromHex } from '../../../utils/stylings';
import Container from '../../UI/Container';
import SectionHeader from './SectionHeader';

const Section = styled.section`
  position: relative;
  margin-bottom: 3rem;

  ${mediaQuery('lg')} {
    height: 100vh;
  }
`;

const InnerStyled = styled.div`
  position: relative;
  margin-top: -15%;

  ${mediaQuery('lg')} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin-top: ${({ theme }) => `calc(-${theme.sizes.header.height} + 2.5vw)`};
  }
`;

const ImageBox = styled.div`
  position: relative;

  &::before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => getRgbaStringFromHex(theme.colors.brand.light, 0.3)};
    content: '';
  }

  ${mediaQuery('lg')} {
    position: unset;

    &::before {
      width: 100vw;
      height: 100vh;
    }
  }
`;

const ContainerStyled = styled(Container)`
  position: relative;
  height: 100%;
`;

const Heading = styled.h1`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.brand.dark};
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: ${({ theme }) => theme.fontFamily.brand};
  text-align: center;

  ${mediaQuery('sm')} {
    font-size: ${({ theme }) => theme.sizes.font['3xl']};
  }

  ${mediaQuery('md')} {
    font-size: ${({ theme }) => theme.sizes.font['4xl']};
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.sizes.font.lg};

  ${mediaQuery('sm')} {
    font-size: ${({ theme }) => theme.sizes.font.xl};
  }

  ${mediaQuery('md')} {
    font-size: ${({ theme }) => theme.sizes.font['2xl']};
  }
`;

const Article = styled.article`
  position: absolute;
  right: 0;
  bottom: -12rem;
  left: 0;
  z-index: 2;
  margin: 1rem;
  padding: 2.5rem 5rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};

  ${mediaQuery('2xl')} {
    width: 67%;
  }
`;

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: ${({ theme }) => theme.sizes.font['3xl']};

  ${mediaQuery('xl')} {
    font-size: ${({ theme }) => theme.sizes.font['4xl']};
  }
`;

type Props = {
  bgImage: string;
  children: ReactNode;
  subtitle?: string;
  title: string;
};

export default function PageHeader({ bgImage, children, title, subtitle }: Props) {
  const isMobile = useMediaQuery('lg');

  return (
    <Section>
      <InnerStyled>
        <ImageBox>
          {isMobile ? (
            <Image src={bgImage} width={1000} height={563} layout="responsive" />
          ) : (
            <Image src={bgImage} layout="fill" objectFit="cover" />
          )}
        </ImageBox>

        <ContainerStyled>
          {isMobile ? (
            <Heading>
              {title}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </Heading>
          ) : (
            <Article>
              <SectionHeaderStyled as="h1">
                {/* \u2014 == &mdash; */}
                {title} {subtitle && `\u2014 ${subtitle}`}
              </SectionHeaderStyled>
              {children}
            </Article>
          )}
        </ContainerStyled>
      </InnerStyled>
    </Section>
  );
}
