import { Box, Center, ChakraProps, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { breakpoints } from '../../../theme';
import { formatDateToLocaleShort, formatTimeToLocaleShort } from '../../../utils/date-time';

type Match = {
  id: string;
  league: string;
  day: string;
  dateTime: string;
  home: { logo: string; name: string };
  away: { logo: string; name: string };
  result?: string;
};

type NearestMatch = {
  date: string;
  time: string;
} & Match;

// TODO: Remove after the data is fetched from the database.
const sampleMatchList: Match[] = [
  {
    id: '1',
    league: 'Kreisliga A',
    day: '12. Spieltag',
    dateTime: 'Fri Jul 26 2021 14:30:00 GMT+0200',
    home: {
      logo: '/images/logos/hsv-neuwied.webp',
      name: 'HSV Neuwied',
    },
    away: {
      logo: '/images/logos/steinefrenz.webp',
      name: 'Spvgg. Steinefrenz',
    },
    result: '3:1',
  },
  {
    id: '2',
    league: 'Kreisliga A',
    day: '13. Spieltag',
    dateTime: 'Fri Sep 6 2021 16:00:00 GMT+0200',
    home: {
      logo: '/images/logos/neustadt.webp',
      name: 'DJK Neustadt-Fernthal',
    },
    away: {
      logo: '/images/logos/hsv-neuwied.webp',
      name: 'HSV Neuwied',
    },
  },
];

type Props = {
  isNextMatch?: boolean;
} & ChakraProps;

export default function Match({ isNextMatch, ...all }: Props) {
  const { isMobile } = useMediaQuery(breakpoints.lg);

  const matchList = sampleMatchList;

  const dateTimePrev = new Date(matchList[0].dateTime);
  const previousMatch: NearestMatch = {
    ...matchList[0],
    date: formatDateToLocaleShort(dateTimePrev),
    time: formatTimeToLocaleShort(dateTimePrev),
  };

  const dateTimeNext = new Date(matchList[1].dateTime);
  const nextMatch: NearestMatch = {
    ...matchList[1],
    date: formatDateToLocaleShort(dateTimeNext),
    time: formatTimeToLocaleShort(dateTimeNext),
  };

  return (
    <Box as="article" bgColor="white" p="3rem" shadow="md" {...all}>
      <Heading fontSize="2xl" textAlign="center" color="brand.base">
        {isNextMatch ? 'Nächstes Spiel' : 'Letztes Spiel'}
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" mt="4">
        <GridItem
          d="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          minW={{ base: '64px', lg: '128px' }}
        >
          <Center>
            <Image
              src={isNextMatch ? nextMatch.home.logo : previousMatch.home.logo}
              alt={isNextMatch ? nextMatch.home.name : previousMatch.home.name}
              width={isMobile ? 64 : 128}
              height={isMobile ? 64 : 128}
              layout="fixed"
            />
          </Center>

          <Box mt="4" fontSize={{ base: 'sm', sm: 'md' }} textAlign="center">
            {isNextMatch ? nextMatch.home.name : previousMatch.home.name}
          </Box>
        </GridItem>

        <GridItem
          colSpan={2}
          d="flex"
          flexDirection="column"
          justifyContent="space-around"
          textAlign="center"
        >
          <Box fontSize={{ base: 'sm', sm: 'md' }}>
            {isNextMatch ? nextMatch.league : previousMatch.league}
            {isMobile ? <br /> : ' – '}
            {isNextMatch ? nextMatch.day : previousMatch.day}
            <br />
            {isNextMatch ? nextMatch.date : previousMatch.date}
            {isMobile ? <br /> : ' – '}
            {isNextMatch ? nextMatch.time : previousMatch.time} Uhr
          </Box>

          <Box fontSize={{ base: '4xl', sm: '5xl' }}>
            {isNextMatch ? 'vs' : previousMatch.result}
          </Box>
        </GridItem>

        <GridItem
          d="flex"
          flexDirection="column"
          justifyContent="space-between"
          minW={{ base: '64px', lg: '128px' }}
        >
          <Center>
            <Image
              src={isNextMatch ? nextMatch.away.logo : previousMatch.away.logo}
              alt={isNextMatch ? nextMatch.away.name : previousMatch.away.name}
              width={isMobile ? 64 : 128}
              height={isMobile ? 64 : 128}
              layout="fixed"
            />
          </Center>

          <Box mt="4" fontSize={{ base: 'sm', sm: 'md' }} textAlign="center">
            {isNextMatch ? nextMatch.away.name : previousMatch.away.name}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
