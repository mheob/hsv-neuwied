import { Box, ChakraProps, HStack, Icon, StackDivider } from '@chakra-ui/react';
import Image from 'next/image';
import { IoCall, IoMail } from 'react-icons/io5';

import { PersonCard as PersonCardType } from '../../../models/person';
import theme from '../../../theme';
import ContactLink from '../../Utils/ContactLink';

type Props = { person: PersonCardType } & ChakraProps;

export default function PersonCard({ person, ...all }: Props) {
  return (
    <Box pos={{ lg: 'relative' }} role="group" {...all}>
      <Image
        src={person.image}
        alt={`${person.name} - ${person.position}`}
        width={420}
        height={600}
      />

      <HStack
        divider={<StackDivider borderColor={theme.colors.brand.light} />}
        pos={{ lg: 'absolute' }}
        right="0"
        bottom="0"
        left="0"
        h="0"
        bgColor={theme.colors.brand.base}
        transition="300ms ease height"
        _groupHover={{ h: '20%' }}
      >
        {person.mail && (
          <ContactLink
            href={`mailto:${person.mail}`}
            title={person.mail}
            isExternal
            d="flex"
            flex="1"
            justifyContent="center"
            color={theme.colors.gray.light}
            _hover={{ color: theme.colors.brand.light }}
          >
            <Icon as={IoMail} w="10" transition="300ms ease height" _groupHover={{ h: '10' }} />
          </ContactLink>
        )}

        {person.tel && (
          <ContactLink
            href={`tel:${person.tel.replace(/\s/g, '')}`}
            title={person.tel}
            isExternal
            d="flex"
            flex="1"
            justifyContent="center"
            color={theme.colors.gray.light}
            _hover={{ color: theme.colors.brand.light }}
          >
            <Icon as={IoCall} w="10" transition="300ms ease height" _groupHover={{ h: '10' }} />
          </ContactLink>
        )}
      </HStack>
    </Box>
  );
}
