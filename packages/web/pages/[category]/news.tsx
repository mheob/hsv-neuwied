import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Grid from '../../components/News/Grid';
import articleCategoryList from '../../data/article-category-list.json';
import articleList from '../../data/articles.json';
import { Article, ArticleCategory, ArticleCategoryType } from '../../models/news';
import { getPartOfUrl } from '../../utils/navigation/router';

export default function NewsOfCategory() {
  const router = useRouter();

  const category = (articleCategoryList as ArticleCategoryType[]).find(
    (category) => category.slug === getPartOfUrl(router, 1)
  );

  const getArticleListInCategory = () =>
    (articleList as Article[])
      .filter(
        (article) => (article.category as ArticleCategoryType).slug === getPartOfUrl(router, 1)
      )
      .slice(0, 9);

  const getTitle = () => {
    let title = 'Aktuelles aus dem Bereich ';

    switch (category?.slug) {
      case ArticleCategory.HAUPTVEREIN:
      case ArticleCategory.NACHWUCHS:
        title += `des ${category.name}es`;
        break;
      case ArticleCategory.RHEIN_DIAMANTEN:
      case ArticleCategory.SENIOREN:
      case ArticleCategory.TURNKLOETZCHEN:
        title += `der ${category.name}`;
        break;
      default:
        title += '';
    }

    return title;
  };

  const getCategorySpecificStyles = () => {
    const styles = silhouetteStylesMisc;

    switch (category?.slug) {
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
    <Layout title={getTitle()}>
      <Grid
        articleList={getArticleListInCategory().sort((a, b) =>
          a.id < b.id ? -1 : a.id < b.id ? 1 : 0
        )}
        title="Aktuelles rund um den HSV"
        mt="48"
        pos="relative"
        css={getCategorySpecificStyles()}
      />
    </Layout>
  );
}

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
