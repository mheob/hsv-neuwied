import { HtmlHTMLAttributes } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import Slider, { Settings } from 'react-slick';
import styled, { css } from 'styled-components';

import { Article } from '../../models/news';
import { mediaQuery } from '../../styles';
import SlickSliderStyles from '../../styles/external/SlickSlider';
import Slide from './Slide';

const iconStyles = css`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.brand.dark};

  ${mediaQuery('sm')} {
    width: 2.5rem;
    height: 2.5rem;
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

const Section = styled.section`
  ${SlickSliderStyles}
`;

type ArrowIconProps = {
  ariaLabel: string;
  type: IconType;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function ArrowIconButton({ ariaLabel, type, className, onClick }: ArrowIconProps) {
  return (
    <button className={className} onClick={onClick} type="button" aria-label={ariaLabel}>
      {type === IoChevronBack ? <IconPrev /> : <IconNext />}
    </button>
  );
}

type Props = { articleList: Article[] };

export default function NewsSlider({ articleList }: Props) {
  const slickSettings: Settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: 'progressive',
    prevArrow: <ArrowIconButton type={IoChevronBack} ariaLabel="Display left slide" />,
    nextArrow: <ArrowIconButton type={IoChevronForward} ariaLabel="Display right slide" />,
    // eslint-disable-next-line react/display-name
    customPaging: () => <button type="button" aria-label="Slider navigation dot" />,
  };

  return (
    <Section className="news-slider">
      <Slider {...slickSettings}>
        {articleList.map((article) => (
          <Slide key={article.id} article={article} />
        ))}
      </Slider>
    </Section>
  );
}
