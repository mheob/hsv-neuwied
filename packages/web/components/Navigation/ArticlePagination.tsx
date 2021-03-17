import styled from 'styled-components';

import { Article } from '../../models/news';
import GridItem from '../News/GridItem';

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
`;

const NewsArticle = styled(GridItem)`
  width: 33%;
`;

type Props = {
  prev?: Article;
  next?: Article;
};

export default function ArticlePagination({ prev, next }: Props) {
  return (
    <Container>
      {prev && <NewsArticle article={prev} />}
      {next && <NewsArticle article={next} />}
    </Container>
  );
}
