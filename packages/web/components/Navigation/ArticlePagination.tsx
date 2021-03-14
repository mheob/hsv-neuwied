import { HStack, StackProps } from '@chakra-ui/react';

import { Article } from '../../models/news';
import GridItem from '../News/GridItem';

type Props = {
  prev?: Article;
  next?: Article;
} & StackProps;

export default function ArticlePagination({ prev, next, ...all }: Props) {
  return (
    <HStack justifyContent="space-around" mt="16" {...all}>
      {prev && <GridItem w={1 / 3} article={prev} />}
      {next && <GridItem w={1 / 3} article={next} />}
    </HStack>
  );
}
