import { Box, ChakraProps, HStack, Icon, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';

import personCardList from '../../../data/board.json';
import socialMediaList from '../../../data/social-media-list.json';
import { PersonCard } from '../../../models/person';
import { SocialMedia } from '../../../models/social-media';
import Simple from '../../Forms/Contact/Simple';
import SideContainer from '../../UI/Container/SideContainer';
import SectionHeader from '../../UI/Header/SectionHeader';
import ContactCard from './ContactCard';

export default function Contact({ ...all }: ChakraProps) {
  const socialIcon = ({ name }: SocialMedia) => {
    switch (name) {
      case 'Facebook':
        return IoLogoFacebook;
      case 'Instagram':
        return IoLogoInstagram;
      case 'Youtube':
        return IoLogoYoutube;
      default:
        throw new Error('The selected social media does not exists.');
    }
  };

  return (
    <SideContainer {...all} side="right">
      <Stack direction={{ base: 'column', xl: 'row' }} spacing="16">
        <Box as="article" w={{ xl: '28rem' }}>
          <SectionHeader fontSize="2xl">Fragen? Ansprechen!</SectionHeader>

          <Simple />

          <HStack as="footer" spacing="8" mt="8" justifyContent="center">
            {(socialMediaList as SocialMedia[]).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                title={item.name}
                isExternal
                color="brand.base"
                _hover={{ color: 'brand.dark' }}
              >
                <Icon as={socialIcon(item)} w="10" h="10" />
              </Link>
            ))}
          </HStack>
        </Box>

        <Box as="article" w="full">
          <SectionHeader fontSize="2xl">Dein Ansprechpartner</SectionHeader>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
            {(personCardList as PersonCard[]).map((item) => (
              <ContactCard key={item.id} person={item} />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </SideContainer>
  );
}
