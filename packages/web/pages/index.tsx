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
import { breakpoints } from '../theme';

const P = styled.p`
  font-size: 1.25rem;

  &:not(:first-of-type) {
    margin-top: 0.75rem;
  }

  ${mediaQuery('xl')} {
    font-size: 1.5rem;
  }
`;

export default function Index() {
  const { isMobile } = useMediaQuery(breakpoints.lg);

  return (
    <Layout title="Home &mdash; HSV Neuwied">
      <PageHeader
        title="Heimatsportverein"
        subtitle="in und für Neuwied"
        bgImage="/images/pages/hsv-neuwied-hero-landing.jpg"
      >
        <P>Du willst mehr über das Angebot und die Aktivitäten vom HSV&nbsp;Neuwied wissen?</P>
        <P>Dann bleib auf dem Laufenden! In und für Neuwied.</P>

        <Button size="lg" mt="8">
          Mehr erfahren
        </Button>
      </PageHeader>

      <Matches mt={{ base: '16', md: '32', xl: '48' }} />

      <NewsSlider articleList={articleList.slice(0, 5)} mt={{ base: '16', md: '32', xl: '48' }} />

      <Contact mt={{ base: '16', md: '32', xl: '48' }} />

      {!isMobile && <Partner mt={{ md: '32', xl: '48' }} />}
    </Layout>
  );
}
