import { Box, ChakraProps, Icon } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HtmlHTMLAttributes } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import Slider, { Settings } from 'react-slick';

import partnerList from '../../../data/partner.json';
import SlickSliderStyles from '../../../styles/external/SlickSlider';
import theme from '../../../theme';
import { shuffle } from '../../../utils/array';
import SideContainer from '../../UI/Container/SideContainer';
import SectionHeader from '../../UI/Header/SectionHeader';

type ArrowIconProps = {
  ariaLabel: string;
  type: IconType;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function ArrowIconButton({ ariaLabel, type, className, onClick }: ArrowIconProps) {
  return (
    <Button className={className} onClick={onClick} type="button" aria-label={ariaLabel}>
      <Icon as={type} w={{ base: '8', sm: '12' }} h={{ base: '8', sm: '12' }} color="white" />
    </Button>
  );
}

export default function Partner({ ...all }: ChakraProps) {
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

  return (
    <SideContainer
      {...all}
      side="left"
      _after={{
        position: 'absolute',
        right: '-80px',
        bottom: '-50px',
        zIndex: -1,
        width: '300px',
        height: `${300 * 2.7375}px`,
        background: 'url("/images/silhouettes/dancing/lifting-figure.svg") no-repeat',
        transform: 'scaleX(-1)',
        opacity: 0.05,
        content: '""',
      }}
    >
      <Box as="article" px={{ md: '24' }} py="12">
        <SectionHeader as="h2" mb="12" ml="36" fontSize="2xl">
          Gönner &mdash; ohne euch geht nichts … Danke!
        </SectionHeader>

        <Box pos="relative" mr="-28" px="32" cursor="grab" css={SlickSliderStyles}>
          <Slider {...slickSettings}>
            {shuffle(partnerList).map((partner) => (
              <Box key={partner.id} p="0.5rem 0.75rem">
                <img src={partner.image} alt={partner.name} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </SideContainer>
  );
}

const Button = styled.button`
  position: absolute;
  top: calc(50% - ${theme.sizes.news.slider.arrowSize} / 2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${theme.sizes.news.slider.arrowSize};
  height: ${theme.sizes.news.slider.arrowSize};
  background-color: ${theme.colors.brand.base};
  border-radius: 100%;

  &:hover {
    opacity: 0.9;
  }

  &.slick-prev {
    left: -${+theme.sizes.news.slider.arrowSize.slice(0, -2) / 2}px;
  }

  &.slick-next {
    right: -${+theme.sizes.news.slider.arrowSize.slice(0, -2) / 2}px;
  }
`;
