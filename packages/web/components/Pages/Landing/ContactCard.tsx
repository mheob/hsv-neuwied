import styled from 'styled-components';

import { PersonCard as PersonCardType } from '../../../models/person';
import PersonCard from '../../UI/Cards/PersonCard';

const Card = styled.div``;

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.sizes.font.lg};
  font-style: italic;
`;

type Props = { person: PersonCardType };

export default function ContactCard({ person }: Props) {
  return (
    <Card>
      {person.title && <Heading>{person.title}</Heading>}
      <PersonCard person={person} mt="1.5rem" />
    </Card>
  );
}
