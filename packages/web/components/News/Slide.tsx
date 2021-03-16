import NextLink from 'next/link';
import styled from 'styled-components';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Article } from '../../models/news';
import { mediaQuery } from '../../styles';
import Button from '../Forms/Button';
import SectionHeader from '../UI/Header/SectionHeader';

const Article = styled.article`
  cursor: grab;
  height: ${({ theme }) => theme.sizes.news.slider.imageHeightMobile + 5}vh;

  ${mediaQuery('sm')} {
    height: ${({ theme }) => theme.sizes.news.slider.imageHeight + 5}vh;
  }
`;

const Teaser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaQuery('md')} {
    justify-content: space-between;
  }
`;

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: ${({ theme }) => theme.sizes.font.lg};
  font-weight: bold;

  ${mediaQuery('md')} {
    font-size: ${({ theme }) => theme.sizes.font.xl};
  }
`;

const Title = styled.a`
  color: white;
  line-height: 1.625;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.light};
  }
`;

const Excerpt = styled.p`
  margin-top: -1rem;
  font-size: ${({ theme }) => theme.sizes.font.lg};
`;

const ButtonStyled = styled(Button)`
  margin-top: 1rem;
  align-self: flex-start;
`;

type Props = { article: Article };

export default function Slide({ article }: Props) {
  const isMobile = useMediaQuery('md');

  // TODO: Check if the href is correct
  // (see: https://nextjs.org/docs/api-reference/next/link#with-url-object)
  const linkToArticle = `/${
    Array.isArray(article.category) ? article.category[0].slug : article.category.slug
  }/${article.slug}`;

  return (
    <Article>
      {/*
        // TODO: Use the NextJS Image component
        //       (currently styled in /theme/external/SlickSlider.tsx)
      */}
      <img src={article.featuredImage.src} alt={article.featuredImage.alt} />

      <Teaser>
        <SectionHeaderStyled hideSpacer={isMobile} isDarkSpacer>
          <NextLink href={linkToArticle}>
            <Title>{article.title}</Title>
          </NextLink>
        </SectionHeaderStyled>

        {!isMobile && (
          <>
            <Excerpt>{article.teaser}</Excerpt>

            <NextLink href={linkToArticle}>
              <ButtonStyled colorScheme="dark">alles erfahren</ButtonStyled>
            </NextLink>
          </>
        )}
      </Teaser>
    </Article>
  );
}
