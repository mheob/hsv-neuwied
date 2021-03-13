import { Box, ChakraProps, Icon } from '@chakra-ui/react';
import { HtmlHTMLAttributes } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import Slider, { Settings } from 'react-slick';

import { Article } from '../../models/news';
import SlickSliderStyles from '../../theme/external/SlickSlider';
import Slide from './Slide';

type ArrowIconProps = {
  ariaLabel: string;
  type: IconType;
  position: 'left' | 'right';
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function ArrowIconButton({ ariaLabel, type, position, className, onClick }: ArrowIconProps) {
  return (
    <button className={className} onClick={onClick} type="button" aria-label={ariaLabel}>
      <Icon
        as={type}
        w={{ base: '8', sm: '10' }}
        h={{ base: '8', sm: '10' }}
        {...(position === 'left' ? { ml: '10' } : { mr: '10' })}
        color="brand.dark"
      />
    </button>
  );
}

type Props = { articleList: Article[] } & ChakraProps;

export default function NewsSlider({ articleList, ...all }: Props) {
  const slickSettings: Settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    prevArrow: (
      <ArrowIconButton ariaLabel="Display left item" type={IoChevronBack} position="left" />
    ),
    nextArrow: (
      <ArrowIconButton ariaLabel="Display right item" type={IoChevronForward} position="right" />
    ),
    // eslint-disable-next-line react/display-name
    customPaging: () => <button type="button" aria-label="Slider navigation dot" />,
  };

  return (
    <Box as="section" {...all} className="news-slider" css={SlickSliderStyles}>
      <Slider {...slickSettings}>
        {articleList.map((article) => (
          <Slide key={article.id} article={article} />
        ))}
      </Slider>
    </Box>
  );
}
