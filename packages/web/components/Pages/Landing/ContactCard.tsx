import { Box, ChakraProps, Heading } from '@chakra-ui/react';

import { PersonCard as PersonCardType } from '../../../models/person';
import PersonCard from '../../UI/Cards/PersonCard';

type Props = { person: PersonCardType } & ChakraProps;

export default function ContactCard({ person, ...all }: Props) {
  return (
    <Box {...all}>
      {person.title && (
        <Heading as="h3" fontSize="lg" fontStyle="italic">
          {person.title}
        </Heading>
      )}
      <PersonCard person={person} mt="6" />
    </Box>
  );
}
