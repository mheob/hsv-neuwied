import { Box, Container, Flex, HStack, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import ArticlePagination from '../../components/Navigation/ArticlePagination';
import Meta from '../../components/News/Meta';
import SideContainer from '../../components/UI/Container/SideContainer';
import articles from '../../data/articles.json';
import { Article, ArticleCategory, defaultArticle } from '../../models/news';
import theme from '../../theme';
import { formatDateToLocaleLong } from '../../utils/date-time';
import { getLastPartOfUrl } from '../../utils/navigation/router';
import { getRgbaStringFromHex } from '../../utils/stylings';

export default function NewsArticle() {
  const router = useRouter();

  const articleList: Article[] = articles;
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

  const renderedCreationDate = article && formatDateToLocaleLong(new Date(article.createdAt));

  return (
    <Layout title={`${article.title} &mdash; HSV Neuwied`}>
      <SideContainer pos="relative" mt="64" p="16" css={getCategorySpecificStyles()}>
        <HStack spacing="24" p="16" alignItems="flex-start">
          <Container as="article">
            <Flex
              as="header"
              direction="column"
              justifyContent="space-around"
              pos="absolute"
              top="-12rem"
              left="-3rem"
              w="50%"
              height="18rem"
              px="20"
              py="16"
              color="white"
              bgColor={getRgbaStringFromHex(theme.colors.brand.base, 0.8)}
              clipPath="polygon(0 0, 94% 10%, 100% 83%, 3% 100%)"
              zIndex="1"
            >
              <Heading as="h1" fontSize="2xl">
                {article.title}
              </Heading>

              <Meta
                creationDate={renderedCreationDate || ''}
                categories={categories}
                color="white"
              />
            </Flex>

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

            <Box
              mx="auto"
              mt="12"
              dangerouslySetInnerHTML={{ __html: article?.body.toString() || '' }}
            />
          </Container>

          <VStack as="aside" spacing="8" w="100%">
            <Flex
              alignItems="center"
              justifyContent="center"
              p="6"
              fontWeight="bold"
              bgColor="brand.light"
              w="100%"
              h="500px"
            >
              WIDGET 1
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="center"
              p="6"
              fontWeight="bold"
              bgColor="brand.light"
              w="100%"
              h="300px"
            >
              WIDGET 2
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="center"
              p="6"
              fontWeight="bold"
              bgColor="brand.light"
              w="100%"
              h="450px"
            >
              WIDGET 3
            </Flex>
          </VStack>
        </HStack>
      </SideContainer>

      {/* // TODO: Maybe it would be nicer to have ~ 3 article of the same category */}
      <ArticlePagination prev={neighbor()} next={neighbor(true)} />
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
