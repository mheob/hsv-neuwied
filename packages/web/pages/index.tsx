import { Box, Heading } from '@chakra-ui/layout';
// import { useMediaQuery } from '@chakra-ui/react';

import Layout from '@components/Layout';
// import { breakpoints } from '@theme';

export default function Index() {
  // const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.sm})`);

  return (
    <Layout title="Home &mdash; HSV Neuwied">
      {/* <PageHeader
        data-testid="page-header"
        title="Heimatsportverein"
        subtitle="in und für Neuwied"
        bgImage="/images/pages/landing/hsv-neuwied-hero"
      >
        <p className="text-xl xl:text-2xl">
          Du willst mehr über das Angebot und die Aktivitäten vom HSV&nbsp;Neuwied wissen?
        </p>
        <p className="mt-3 text-xl xl:text-2xl">
          Dann bleib auf dem Laufenden! In und für Neuwied.
        </p>
        <Button
          className="mt-8 text-xl xl:text-2xl"
          brightness={Brightness.MEDIUM}
          size={Size.LARGE}
        >
          Mehr erfahren
        </Button>
      </PageHeader>

      <LandingMatches data-testid="landing-matches" className="mt-16 md:mt-32 xl:mt-64" />

      <NewsSlider
        data-testid="landing-slider"
        className="mt-56"
        articleList={articleList.slice(0, 5)}
      />

      <LandingContact data-testid="landing-contact" className="mt-16 md:mt-32 xl:mt-64" />

      {!isMobile && <LandingPartner data-testid="landing-partner" className="mt-80" />} */}

      <Box bgColor="brand.base" color="white">
        <Heading as="h2">
          An error occurred motion.custom() is deprecated. Use motion() instead.
        </Heading>
      </Box>
    </Layout>
  );
}
