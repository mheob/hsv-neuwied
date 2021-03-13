import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import theme, { breakpoints } from '../../../theme';
import { getRgbStringFromHex } from '../../../utils/stylings';
import Container from '../../UI/Container';
import SectionHeader from './SectionHeader';

type Props = {
  bgImage: string;
  children: ReactNode;
  subtitle?: string;
  title: string;
};

export default function PageHeader({ bgImage, children, title, subtitle }: Props) {
  const { isMobile } = useMediaQuery(breakpoints.lg);

  return (
    <Box as="section" pos="relative" h={{ lg: '100vh' }} mb="12">
      <Box
        pos={{ base: 'relative', lg: 'absolute' }}
        top="0"
        left="0"
        w={{ lg: '100vw' }}
        h={{ lg: '100vh' }}
        mt={{ base: '-15%', lg: `calc(-${theme.sizes.header.height} + 2.5vw)` }}
      >
        <Box
          pos={{ base: 'relative', lg: 'unset' }}
          _before={{
            bgColor: `rgba(${getRgbStringFromHex(theme.colors.brand.light)}, 0.3)`,
            pos: 'absolute',
            w: { base: '100%', lg: '100vw' },
            h: { base: '100%', lg: '100vh' },
            zIndex: '1',
            content: '""',
          }}
        >
          {isMobile ? (
            <Image src={bgImage} width={1000} height={563} layout="responsive" />
          ) : (
            <Image src={bgImage} layout="fill" objectFit="cover" />
          )}
        </Box>

        <Container pos="relative" h="full">
          {isMobile ? (
            <Heading
              as="h1"
              mt="8"
              fontFamily="brand"
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              color="brand.dark"
              textAlign="center"
            >
              {title}
              {subtitle && (
                <Text as="span" d="block" fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}>
                  {subtitle}
                </Text>
              )}
            </Heading>
          ) : (
            <Box
              as="article"
              pos="absolute"
              right="0"
              bottom="-12rem"
              left="0"
              w={{ '2xl': '67%' }}
              m="4"
              px="20"
              py="10"
              bgColor="white"
              boxShadow="md"
              zIndex="2"
            >
              <SectionHeader as="h1" fontSize={{ base: '3xl', xl: '4xl' }}>
                {/* \u2014 == &mdash; */}
                {title} {subtitle && `\u2014 ${subtitle}`}
              </SectionHeader>
              {children}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
