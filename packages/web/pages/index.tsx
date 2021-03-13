import { Text } from '@chakra-ui/react';

import Button from '../components/Forms/Button';
import Layout from '../components/Layout';
import NewsSlider from '../components/News/Slider';
import Contact from '../components/Pages/Landing/Contact';
import Matches from '../components/Pages/Landing/Matches';
import Partner from '../components/Pages/Landing/Partner';
import PageHeader from '../components/UI/Header/PageHeader';
import articleList from '../data/articles.json';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { breakpoints } from '../theme';

export default function Index() {
  const { isMobile } = useMediaQuery(breakpoints.lg);

  return (
    <Layout title="Home &mdash; HSV Neuwied">
      <PageHeader
        title="Heimatsportverein"
        subtitle="in und für Neuwied"
        bgImage="/images/pages/hsv-neuwied-hero-landing.jpg"
      >
        <Text fontSize={{ base: 'xl', xl: '2xl' }}>
          Du willst mehr über das Angebot und die Aktivitäten vom HSV&nbsp;Neuwied wissen?
        </Text>

        <Text fontSize={{ base: 'xl', xl: '2xl' }} mt="3">
          Dann bleib auf dem Laufenden! In und für Neuwied.
        </Text>

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
