import { Box, Heading, Link, Stack, StackProps, Text, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { Article } from '../../models/news';
import { formatDateToLocaleLong } from '../../utils/date-time';
import Button from '../Forms/Button';
import Meta from './Meta';

type Props = { article: Article } & StackProps;

export default function GridItem({ article, ...all }: Props) {
  const categories = Array.isArray(article.category) ? article.category : [article.category];
  const hrefToArticle = `/${categories[0].slug}/${article.slug}`;

  return (
    <VStack
      spacing="4"
      justifyContent="space-between"
      p="6"
      bgColor="white"
      boxShadow="md"
      {...all}
    >
      <Box as="header">
        <NextLink href={hrefToArticle} passHref>
          <Link d="block" overflow="hidden">
            <Image
              src={article.featuredImage.src}
              alt={article.featuredImage.alt}
              width={450}
              height={320}
              layout="responsive"
            />
          </Link>
        </NextLink>

        <Heading as="h1" mt="12" fontSize="2xl">
          <NextLink href={hrefToArticle} passHref>
            <Link color="brand.base" _hover={{ color: 'brand.dark' }}>
              {article.title}
            </Link>
          </NextLink>
        </Heading>
      </Box>

      <Text fontSize="lg">{article.teaser}</Text>

      <Stack
        as="footer"
        direction={{ base: 'column', md: 'row' }}
        alignContent="flex-end"
        justifyContent="space-between"
        w="full"
      >
        <Meta
          creationDate={formatDateToLocaleLong(new Date(article.createdAt))}
          categories={categories}
        />

        <NextLink href={hrefToArticle} passHref>
          <Button as="a" colorScheme="dark" alignSelf="flex-end" ml="4" whiteSpace="nowrap">
            alles erfahren
          </Button>
        </NextLink>
      </Stack>
    </VStack>
  );
}

const Image = styled(NextImage)`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  transition: 1.5s ease transform, 1.5s ease opacity;

  &:hover {
    transform: scale(1.4);
    opacity: 0.8;
  }
`;
