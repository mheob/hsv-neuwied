import { useRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import ArticlePagination from '../../components/Navigation/ArticlePagination';
import Article from '../../components/News/Article';
import SideContainer from '../../components/UI/Container/SideContainer';
import articles from '../../data/articles.json';
import { ArticleCategory, Article as ArticleType, defaultArticle } from '../../models/news';
import { getLastPartOfUrl } from '../../utils/navigation/router';

const silhouetteStylesMisc = {
  styles: `
    &::before,
    &::after {
      position: absolute;
      z-index: -1;
      background-repeat: no-repeat;
      opacity: 0.05;
      content: '';
    }
  `,
};

const silhouetteStylesGeneral = `
  &::before {
    top: -150px;
    right: -100px;
    width: 600px;
    height: ${600 * 1.048}px;
    background-image: url('/images/silhouettes/soccer/bicycle-kick.svg');
    transform: scaleX(-1);
  }

  &::after {
    bottom: -200px;
    left: -120px;
    width: 400px;
    height: ${400 * 1.577}px;
    background-image: url('/images/silhouettes/gymnastic/stretching.svg');
  }
`;

const silhouetteStylesSenior = `
  &::before {
    top: -100px;
    right: -100px;
    width: 600px;
    height: ${600 * 1.085}px;
    background-image: url('/images/silhouettes/soccer/goalkeeper.svg');
    transform: scaleX(-1);
  }

  &::after {
    bottom: -100px;
    left: -120px;
    width: 300px;
    height: ${300 * 1.767}px;
    background-image: url('/images/silhouettes/soccer/dribbling-front.svg');
    transform: scaleX(-1);
  }
`;

const silhouetteStylesJunior = `
  &::before {
    top: -150px;
    right: -100px;
    width: 400px;
    height: ${400 * 1.117}px;
    background-image: url('/images/silhouettes/soccer/shot.svg');
    transform: scaleX(-1);
  }

  &::after {
    bottom: -400px;
    left: -120px;
    width: 400px;
    height: ${400 * 1.053}px;
    background-image: url('/images/silhouettes/soccer/dribbling-child.svg');
  }
`;

const silhouetteStylesGymnastic = `
  &::before {
    top: -150px;
    right: -100px;
    width: 350px;
    height: ${350 * 1.6}px;
    background-image: url('/images/silhouettes/gymnastic/mother-baby.svg');
  }

  &::after {
    bottom: -250px;
    left: -120px;
    width: 450px;
    height: ${450 * 1.093}px;
    background-image: url('/images/silhouettes/gymnastic/family.svg');
  }
`;

const silhouetteStylesDiamonds = `
  &::before {
    top: -150px;
    right: -100px;
    width: 400px;
    height: ${400 * 1.317}px;
    background-image: url('/images/silhouettes/dancing/dancing-pair-2.svg');
  }

  &::after {
    bottom: -250px;
    left: -120px;
    width: 600px;
    height: ${600 * 0.811}px;
    background-image: url('/images/silhouettes/dancing/dancing-team.svg');
  }
`;

const SideContainerStyled = styled(SideContainer)`
  position: relative;
  margin-top: 16rem;
  padding: 4rem;
`;

const Columns = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4rem;

  > * ~ * {
    margin-left: 6rem;
  }
`;

const Aside = styled.aside`
  width: 100%;

  > * ~ * {
    margin-top: 2rem;
  }
`;

const Widget = styled.div<{ height: string }>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height};
  padding: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.brand.light};
`;

export default function NewsArticle() {
  const router = useRouter();

  const articleList: ArticleType[] = articles;
  const article =
    articleList.find((article) => article.slug === getLastPartOfUrl(router)) || defaultArticle;
  const neighbor = (isNext = false) =>
    article && articleList[articleList.indexOf(article) + (isNext ? +1 : -1)];

  const categories =
    article && (Array.isArray(article.category) ? article.category : [article.category]);

  const getCategorySpecificStyles = () => {
    const styles = silhouetteStylesMisc;

    switch (categories && categories[0].slug) {
      case ArticleCategory.NACHWUCHS:
        styles.styles += silhouetteStylesJunior;
        break;
      case ArticleCategory.RHEIN_DIAMANTEN:
        styles.styles += silhouetteStylesDiamonds;
        break;
      case ArticleCategory.SENIOREN:
        styles.styles += silhouetteStylesSenior;
        break;
      case ArticleCategory.TURNKLOETZCHEN:
        styles.styles += silhouetteStylesGymnastic;
        break;
      default:
        styles.styles += silhouetteStylesGeneral;
    }

    return styles;
  };

  return (
    <Layout title={`${article.title} &mdash; HSV Neuwied`}>
      <SideContainerStyled css={getCategorySpecificStyles()}>
        <Columns>
          <Article article={article} categories={categories} />

          <Aside>
            <Widget height="500px">WIDGET 1</Widget>
            <Widget height="300px">WIDGET 2</Widget>
            <Widget height="450px">WIDGET 3</Widget>
          </Aside>
        </Columns>
      </SideContainerStyled>

      {/* // TODO: Maybe it would be nicer to have ~ 3 article of the same category */}
      <ArticlePagination prev={neighbor()} next={neighbor(true)} />
    </Layout>
  );
}
