import styled from 'styled-components';

import { Breakpoint, getTopSpacing, mediaQuery } from '../../../styles';
import Button from '../../Forms/Button';
import Container from '../../UI/Container';
import SectionHeader from '../../UI/Header/SectionHeader';
import Match from './Match';

type SectionProps = {
  mt?: string | { [key in Breakpoint]?: string };
};

const Section = styled.section<SectionProps>`
  position: relative;

  &::after {
    position: absolute;
    bottom: -150px;
    left: -150px;
    z-index: -1;
    width: 250px;
    height: ${250 * 2.0615}px;
    background: url('/images/silhouettes/soccer/standing-child.svg') no-repeat;
    opacity: 0.05;
    content: '';
  }

  ${({ mt }) => mt && getTopSpacing(mt)}
`;

const MatchesContainer = styled(Container)`
  ${mediaQuery('xl')} {
    margin-right: -5%;
    margin-left: 5%;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQuery('md')} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: ${({ theme }) => theme.sizes.font.xl};

  ${mediaQuery('xl')} {
    font-size: ${({ theme }) => theme.sizes.font['2xl']};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: -1.5rem;
  margin-bottom: 1.5rem;

  ${mediaQuery('md')} {
    align-self: unset;
    margin-top: unset;
    margin-bottom: unset;
  }

  > * ~ * {
    margin-left: 1rem;
  }
`;

const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  ${mediaQuery('xl')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }
`;

type Props = SectionProps;

export default function Matches({ mt }: Props) {
  return (
    <Section mt={mt}>
      <MatchesContainer>
        <Header>
          <SectionHeaderStyled>Aktuelle Spiele vom HSV</SectionHeaderStyled>

          <ButtonGroup>
            <Button size="small">Alle Spiele</Button>
            <Button size="small">Tabelle</Button>
          </ButtonGroup>
        </Header>

        <MatchesGrid>
          <Match />
          <Match isNextMatch />
        </MatchesGrid>
      </MatchesContainer>
    </Section>
  );
}
