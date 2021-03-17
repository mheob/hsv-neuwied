import Image from 'next/image';
import styled from 'styled-components';

import sampleMatchList from '../../../data/sample-matches.json';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Match as MatchType, NearestMatch } from '../../../models/match';
import { mediaQuery } from '../../../styles';
import { formatDateToLocaleShort, formatTimeToLocaleShort } from '../../../utils/date-time';

// TODO: Remove after the matches are fetched from the database
const matchList = sampleMatchList as MatchType[];

const Article = styled.article`
  padding: 3rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.brand.base};
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 64px;

  ${mediaQuery('lg')} {
    min-width: 128px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TeamName = styled.div`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.sizes.font.sm};
  text-align: center;

  ${mediaQuery('sm')} {
    font-size: ${({ theme }) => theme.sizes.font.md};
  }
`;

const MatchInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  column-span: 2;
`;

const Meta = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.sm};

  ${mediaQuery('sm')} {
    font-size: ${({ theme }) => theme.sizes.font.md};
  }
`;

const Result = styled.div`
  font-size: ${({ theme }) => theme.sizes.font['4xl']};

  ${mediaQuery('sm')} {
    font-size: ${({ theme }) => theme.sizes.font['5xl']};
  }
`;

type Props = {
  isNextMatch?: boolean;
};

export default function Match({ isNextMatch }: Props) {
  const isMobile = useMediaQuery('lg');

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
    <Article>
      <Heading>{isNextMatch ? 'Nächstes Spiel' : 'Letztes Spiel'}</Heading>

      <Grid>
        <TeamContainer>
          <ImageContainer>
            <Image
              src={isNextMatch ? nextMatch.home.logo : previousMatch.home.logo}
              alt={isNextMatch ? nextMatch.home.name : previousMatch.home.name}
              width={isMobile ? 64 : 128}
              height={isMobile ? 64 : 128}
              layout="fixed"
            />
          </ImageContainer>

          <TeamName>{isNextMatch ? nextMatch.home.name : previousMatch.home.name}</TeamName>
        </TeamContainer>

        <MatchInformation>
          <Meta>
            {isNextMatch ? nextMatch.league : previousMatch.league}
            {isMobile ? <br /> : ' – '}
            {isNextMatch ? nextMatch.day : previousMatch.day}
            <br />
            {isNextMatch ? nextMatch.date : previousMatch.date}
            {isMobile ? <br /> : ' – '}
            {isNextMatch ? nextMatch.time : previousMatch.time} Uhr
          </Meta>

          <Result>{isNextMatch ? 'vs' : previousMatch.result}</Result>
        </MatchInformation>

        <TeamContainer>
          <ImageContainer>
            <Image
              src={isNextMatch ? nextMatch.away.logo : previousMatch.away.logo}
              alt={isNextMatch ? nextMatch.away.name : previousMatch.away.name}
              width={isMobile ? 64 : 128}
              height={isMobile ? 64 : 128}
              layout="fixed"
            />
          </ImageContainer>

          <TeamName>{isNextMatch ? nextMatch.away.name : previousMatch.away.name}</TeamName>
        </TeamContainer>
      </Grid>
    </Article>
  );
}
