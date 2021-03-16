import { HtmlHTMLAttributes } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import Slider, { Settings } from 'react-slick';
import styled, { css } from 'styled-components';

import partnerList from '../../../data/partner.json';
import { Breakpoint, mediaQuery } from '../../../styles';
import SlickSliderStyles from '../../../styles/external/SlickSlider';
import { shuffle } from '../../../utils/array';
import SideContainer from '../../UI/Container/SideContainer';
import SectionHeader from '../../UI/Header/SectionHeader';

const iconStyles = css`
  width: 2rem;
  height: 2rem;
  color: white;

  ${mediaQuery('sm')} {
    width: 3rem;
    height: 3rem;
  }
`;

const IconPrev = styled(IoChevronBack)`
  ${iconStyles}
  margin-left: 2.5rem;
`;

const IconNext = styled(IoChevronForward)`
  ${iconStyles}
  margin-right: 2.5rem;
`;

const SideContainerStyled = styled(SideContainer)`
  &::after {
    position: absolute;
    right: -80px;
    bottom: -50px;
    z-index: -1;
    width: 300px;
    height: ${300 * 2.7375}px;
    background: url('/images/silhouettes/dancing/lifting-figure.svg') no-repeat;
    transform: scaleX(-1);
    opacity: 0.05;
    content: '';
  }
`;

const Article = styled.article`
  padding: 3rem 0;

  ${mediaQuery('md')} {
    padding: 3rem 6rem;
  }
`;

const SectionHeaderStyled = styled(SectionHeader)`
  margin-bottom: 3rem;
  margin-left: 9rem;
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
`;

const SliderContainer = styled.div`
  ${SlickSliderStyles}

  position: relative;
  margin-right: -7rem;
  padding: 0 8rem;
  cursor: grab;
`;

const ImageContainer = styled.div`
  padding: 0.5rem 0.75rem;
`;

const Button = styled.button`
  position: absolute;
  top: calc(50% - ${({ theme }) => theme.sizes.news.slider.arrowSize} / 2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.sizes.news.slider.arrowSize};
  height: ${({ theme }) => theme.sizes.news.slider.arrowSize};
  background-color: ${({ theme }) => theme.colors.brand.base};
  border-radius: 100%;

  &:hover {
    opacity: 0.9;
  }

  &.slick-prev {
    left: -${({ theme }) => theme.sizes.news.slider.arrowSize / 2}px;
  }

  &.slick-next {
    right: -${({ theme }) => theme.sizes.news.slider.arrowSize / 2}px;
  }
`;

type ArrowIconProps = {
  ariaLabel: string;
  type: IconType;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function ArrowIconButton({ ariaLabel, type, className, onClick }: ArrowIconProps) {
  return (
    <Button className={className} onClick={onClick} type="button" aria-label={ariaLabel}>
      {type === IoChevronBack ? <IconPrev /> : <IconNext />}
    </Button>
  );
}

const slickSettings: Settings = {
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 6000,
  prevArrow: <ArrowIconButton ariaLabel="Display left item" type={IoChevronBack} />,
  nextArrow: <ArrowIconButton ariaLabel="Display right item" type={IoChevronForward} />,
};

type Props = {
  mt?: string | { [key in Breakpoint]?: string };
};

export default function Partner({ mt }: Props) {
  return (
    <SideContainerStyled mt={mt} side="left">
      <Article>
        <SectionHeaderStyled>Gönner &mdash; ohne euch geht nichts … Danke!</SectionHeaderStyled>

        <SliderContainer>
          <Slider {...slickSettings}>
            {shuffle(partnerList).map((partner) => (
              <ImageContainer key={partner.id}>
                {/* // TODO: Use NextJS for the generation of the images */}
                <img src={partner.image} alt={partner.name} />
              </ImageContainer>
            ))}
          </Slider>
        </SliderContainer>
      </Article>
    </SideContainerStyled>
  );
}
