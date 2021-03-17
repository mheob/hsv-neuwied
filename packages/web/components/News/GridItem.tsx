import NextImage, { ImageProps } from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';

import { Article } from '../../models/news';
import { mediaQuery } from '../../styles';
import { formatDateToLocaleLong } from '../../utils/date-time';
import Button from '../Forms/Button';
import Meta from './Meta';

const ArticleStyled = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};

  > * ~ * {
    margin-top: 1rem;
  }
`;

const Header = styled.header``;

const ImageLink = styled.a`
  display: block;
  overflow: hidden;
`;

const Image = styled(NextImage)<ImageProps>`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  transition: 1.5s ease transform, 1.5s ease opacity;

  &:hover {
    transform: scale(1.4);
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  margin-top: 3rem;
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
`;

const TitleLink = styled.a`
  color: ${({ theme }) => theme.colors.brand.base};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.dark};
  }
`;

const Teaser = styled.p`
  font-size: ${({ theme }) => theme.sizes.font.lg};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: space-between;
  width: 100%;

  ${mediaQuery('md')} {
    flex-direction: row;
  }
`;

const ButtonStyled = styled(Button)`
  align-self: flex-end;
  margin-left: 1rem;
  white-space: nowrap;
`;

type Props = { article: Article };

export default function GridItem({ article }: Props) {
  const categories = Array.isArray(article.category) ? article.category : [article.category];
  const hrefToArticle = `/${categories[0].slug}/${article.slug}`;

  return (
    <ArticleStyled>
      <Header>
        <NextLink href={hrefToArticle} passHref>
          <ImageLink>
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              width={450}
              height={320}
              layout="responsive"
            />
          </ImageLink>
        </NextLink>

        <Title>
          <NextLink href={hrefToArticle}>
            <TitleLink>{article.title}</TitleLink>
          </NextLink>
        </Title>
      </Header>

      <Teaser>{article.teaser}</Teaser>

      <Footer>
        <Meta
          creationDate={formatDateToLocaleLong(new Date(article.createdAt))}
          categories={categories}
        />

        <ButtonStyled href={hrefToArticle} colorScheme="dark">
          alles erfahren
        </ButtonStyled>
      </Footer>
    </ArticleStyled>
  );
}
