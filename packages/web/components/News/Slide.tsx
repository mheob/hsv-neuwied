import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Article } from '../../models/news';
import theme, { breakpoints } from '../../theme';
import Button from '../Forms/Button';
import SectionHeader from '../UI/Header/SectionHeader';

type Props = { article: Article };

export default function Slide({ article }: Props) {
  const { isMobile } = useMediaQuery(breakpoints.md);

  return (
    <Box
      as="article"
      cursor="grab"
      h={{
        base: `${+theme.sizes.news.slider.imageHeightMobile.slice(0, -2) + 5}vh`,
        sm: `${+theme.sizes.news.slider.imageHeight.slice(0, -2) + 5}vh`,
      }}
    >
      {/*
        // TODO: Use the NextJS Image component
        //       (currently styled in /theme/external/SlickSlider.tsx)
      */}
      <img src={article.featuredImage.src} alt={article.featuredImage.alt} />

      <Flex
        className="teaser"
        direction="column"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <SectionHeader
          as="h3"
          isDarkSpacer
          hideSpacer={isMobile}
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
        >
          <NextLink
            // TODO: Check if the href is correct
            // (see: https://nextjs.org/docs/api-reference/next/link#with-url-object)
            href={`/${
              Array.isArray(article.category) ? article.category[0].slug : article.category.slug
            }/${article.slug}`}
            passHref
          >
            <Link color="white" _hover={{ color: 'brand.light' }} lineHeight="tall">
              {article.title}
            </Link>
          </NextLink>
        </SectionHeader>

        {!isMobile && (
          <>
            <Text mt="-4" fontSize="lg">
              {article.teaser}
            </Text>

            <NextLink
              // TODO: Check if the href is correct
              // (see: https://nextjs.org/docs/api-reference/next/link#with-url-object)
              href={`/${
                Array.isArray(article.category) ? article.category[0].slug : article.category.slug
              }/${article.slug}`}
              passHref
            >
              <Button colorScheme="dark" mt="4" alignSelf="flex-start">
                alles erfahren
              </Button>
            </NextLink>
          </>
        )}
      </Flex>
    </Box>
  );
}
