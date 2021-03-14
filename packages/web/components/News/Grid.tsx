import { ChakraProps, SimpleGrid } from '@chakra-ui/react';

import { Article } from '../../models/news';
import Container from '../UI/Container';
import SectionHeader from '../UI/Header/SectionHeader';
import GridItem from './GridItem';

type Props = {
  articleList: Article[];
  title: string;
} & ChakraProps;

export default function Grid({ articleList, title, ...all }: Props) {
  return (
    <Container {...all}>
      <SectionHeader as="h2" fontSize="2xl">
        {title}
      </SectionHeader>

      <SimpleGrid columns={{ base: 1, lg: 2, '2xl': 3, '3xl': 4 }} spacing="10" mt="32">
        {articleList.map((article) => (
          <GridItem key={article.id} article={article} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
