import Image from 'next/image';
import styled from 'styled-components';

import { ArticleCategoryType, Article as ArticleType } from '../../models/news';
import { formatDateToLocaleLong } from '../../utils/date-time';
import { getRgbaStringFromHex } from '../../utils/stylings';
import Meta from './Meta';

const Article = styled.article``;

const Header = styled.header`
  position: absolute;
  top: -12rem;
  left: -3rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 18rem;
  padding: 4rem 5rem;
  color: white;
  background-color: ${({ theme }) => getRgbaStringFromHex(theme.colors.brand.base, 0.8)};
  clip-path: polygon(0 0, 94% 10%, 100% 83%, 3% 100%);
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
`;

const Content = styled.div`
  margin: 3rem auto 0;
`;

type Props = {
  article: ArticleType;
  categories: ArticleCategoryType[];
};

export default function NewsArticle({ article, categories }: Props) {
  const renderedCreationDate = article && formatDateToLocaleLong(new Date(article.createdAt));

  return (
    <Article>
      <Header>
        <Title>{article.title}</Title>

        <Meta
          creationDate={renderedCreationDate || ''}
          categories={categories}
          css={{ color: 'white' }}
        />
      </Header>

      <figure>
        <Image
          src={article.featuredImage.src}
          alt={article.featuredImage.alt || article.title || 'HSV Neuwied'}
          width={640}
          height={360}
          layout="responsive"
        />
        <figcaption>{article.featuredImage.caption}</figcaption>
      </figure>

      <Content dangerouslySetInnerHTML={{ __html: article.body.toString() || '' }} />
    </Article>
  );
}
