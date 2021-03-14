import { Box, ChakraProps, Icon, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { IoCalendar, IoNewspaper } from 'react-icons/io5';

import { ArticleCategoryType } from '../../models/news';

type Props = {
  creationDate: string;
  categories?: ArticleCategoryType[];
} & ChakraProps;

export default function Meta({ creationDate, categories, ...all }: Props) {
  return (
    <Box fontSize="sm" color="gray.600" {...all}>
      <Box>
        <Icon as={IoCalendar} w="5" mr="2" />
        {creationDate}
      </Box>

      <Box>
        <Icon as={IoNewspaper} w="5" mr="2" />
        {categories &&
          categories.map((category) => (
            <NextLink key={category.id} href={`/${category.slug}/news`} passHref>
              <CategoryLink _hover={{ color: 'gray.800' }}>{category.name}</CategoryLink>
            </NextLink>
          ))}
      </Box>
    </Box>
  );
}

const CategoryLink = styled(Link)`
  &:not(:last-of-type)::after {
    content: ', ';
  }
`;
