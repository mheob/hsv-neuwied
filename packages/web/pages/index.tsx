import styled from 'styled-components';

import Button from '../components/Forms/Button';
import Layout from '../components/Layout';
import NewsSlider from '../components/News/Slider';
import Contact from '../components/Pages/Landing/Contact';
import Matches from '../components/Pages/Landing/Matches';
import Partner from '../components/Pages/Landing/Partner';
import PageHeader from '../components/UI/Header/PageHeader';
import articleList from '../data/articles.json';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { mediaQuery } from '../styles';

const P = styled.p`
  font-size: ${({ theme }) => theme.sizes.font.xl};

  ~ p {
    margin-top: 0.75rem;
  }

  ${mediaQuery('xl')} {
    font-size: ${({ theme }) => theme.sizes.font.xl};
  }
`;

export default function Index() {
  const isMobile = useMediaQuery('lg');

  return (
    <Layout title="Home &mdash; HSV Neuwied">
      <PageHeader
        title="Heimatsportverein"
        subtitle="in und für Neuwied"
        bgImage="/images/pages/hsv-neuwied-hero-landing.jpg"
      >
        <P>Du willst mehr über das Angebot und die Aktivitäten vom HSV&nbsp;Neuwied wissen?</P>
        <P>Dann bleib auf dem Laufenden! In und für Neuwied.</P>

        <Button size="large" mt="1rem">
          Mehr erfahren
        </Button>
      </PageHeader>

      <Matches mt={{ base: '4rem', md: '8rem', xl: '12rem' }} />

      <NewsSlider
        articleList={articleList.slice(0, 5)}
        mt={{ base: '4rem', md: '8rem', xl: '12rem' }}
      />

      <Contact mt={{ base: '4rem', md: '8rem', xl: '12rem' }} />

      {!isMobile && <Partner mt={{ md: '8rem', xl: '12rem' }} />}
    </Layout>
  );
}
