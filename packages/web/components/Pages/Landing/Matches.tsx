import { Box, ContainerProps, Flex, HStack, SimpleGrid } from '@chakra-ui/react';

import Button from '../../Forms/Button';
import Container from '../../UI/Container';
import SectionHeader from '../../UI/Header/SectionHeader';
import Match from './Match';

export default function Matches({ ...all }: ContainerProps) {
  return (
    <Container
      {...all}
      as="section"
      pos="relative"
      _after={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        zIndex: -1,
        width: '250px',
        height: `${250 * 2.0615}px`,
        background: 'url("/images/silhouettes/soccer/standing-child.svg") no-repeat',
        opacity: 0.05,
        content: '""',
      }}
    >
      <Box ml={{ xl: '5%' }} mr={{ xl: '-5%' }}>
        <Flex
          as="header"
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ md: 'flex-start' }}
        >
          <SectionHeader fontSize={{ base: 'xl', md: '2xl' }}>
            Aktuelle Spiele vom HSV
          </SectionHeader>

          <HStack
            spacing="4"
            alignSelf={{ base: 'flex-end', md: 'unset' }}
            mt={{ base: '-6', md: 'unset' }}
            mb={{ base: '6', md: 'unset' }}
          >
            <Button size="sm">Alle Spiele</Button>
            <Button size="sm">Tabelle</Button>
          </HStack>
        </Flex>

        <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={{ base: '10', xl: '20' }}>
          <Match />
          <Match isNextMatch />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
