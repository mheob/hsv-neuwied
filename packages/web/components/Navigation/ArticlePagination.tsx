import styled from 'styled-components';

import { Article } from '../../models/news';
import GridItem from '../News/GridItem';

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
`;

const Article = styled(GridItem)`
  width: 33%;
`;

type Props = {
  prev?: Article;
  next?: Article;
};

export default function ArticlePagination({ prev, next }: Props) {
  return (
    <Container>
      {prev && <Article article={prev} />}
      {next && <Article article={next} />}
    </Container>
  );
}
