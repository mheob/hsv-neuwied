import styled from 'styled-components';

import Layout from '../../components/Layout';
import Grid from '../../components/News/Grid';
import articleList from '../../data/articles.json';

const NewsGrid = styled(Grid)`
  position: relative;
  margin-top: 12rem;

  &::before {
    position: absolute;
    top: -100px;
    right: -100px;
    z-index: -1;
    width: 600px;
    height: ${600 * 1.048}px;
    background: url(/images/silhouettes/soccer/bicycle-kick.svg) no-repeat;
    transform: scaleX(-1);
    opacity: 0.05;
    content: '';
  }

  &::after {
    position: absolute;
    bottom: -150px;
    left: -120px;
    z-index: -1;
    width: 400px;
    height: ${400 * 1.577}px;
    background: url(/images/silhouettes/gymnastic/stretching.svg) no-repeat;
    transform: scaleX(-1);
    opacity: 0.05;
    content: '';
  }
`;

export default function AllNews() {
  return (
    <Layout title="Aktuelles rund um den HSV Neuwied">
      <NewsGrid
        articleList={articleList.sort((a, b) => (a.id < b.id ? -1 : 1))}
        title="Aktuelles rund um den HSV"
      />
    </Layout>
  );
}
