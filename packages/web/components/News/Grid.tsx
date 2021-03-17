import styled from 'styled-components';

import { Article } from '../../models/news';
import { mediaQuery } from '../../styles';
import Container from '../UI/Container';
import SectionHeader from '../UI/Header/SectionHeader';
import GridItem from './GridItem';

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 8rem;

  ${mediaQuery('lg')} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery('2xl')} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mediaQuery('3xl')} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

type Props = {
  articleList: Article[];
  title: string;
};

export default function NewsGrid({ articleList, title }: Props) {
  return (
    <Container>
      <SectionHeaderStyled>{title}</SectionHeaderStyled>

      <Grid>
        {articleList.map((article) => (
          <GridItem key={article.id} article={article} />
        ))}
      </Grid>
    </Container>
  );
}
