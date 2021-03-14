import Layout from '../../components/Layout';
import Grid from '../../components/News/Grid';
import articleList from '../../data/articles.json';

export default function AllNews() {
  return (
    <Layout title="Aktuelles rund um den HSV Neuwied">
      <Grid
        articleList={articleList.sort((a, b) => (a.id < b.id ? -1 : 1))}
        title="Aktuelles rund um den HSV"
        mt="48"
        pos="relative"
        _before={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          zIndex: -1,
          width: '600px',
          height: `${600 * 1.048}px`,
          background: 'url("/images/silhouettes/soccer/bicycle-kick.svg") no-repeat',
          transform: 'scaleX(-1)',
          opacity: 0.05,
          content: '""',
        }}
        _after={{
          position: 'absolute',
          bottom: '-150px',
          left: '-120px',
          zIndex: -1,
          width: '400px',
          height: `${400 * 1.577}px`,
          background: 'url("/images/silhouettes/gymnastic/stretching.svg") no-repeat',
          transform: 'scaleX(-1)',
          opacity: 0.05,
          content: '""',
        }}
      />
    </Layout>
  );
}
