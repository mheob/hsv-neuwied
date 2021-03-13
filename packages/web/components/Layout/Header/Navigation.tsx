import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import breakpoints from '../../../theme/foundations/breakpoints';
import NavigationLinks from './NavigationLinks';

export default function Navigation() {
  const { isMobile } = useMediaQuery(breakpoints.lg);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent="flex-end" w="full" alignItems={{ lg: 'flex-end' }}>
      {isMobile ? (
        <>
          <Button colorScheme="" onClick={onOpen} px="0" type="button" aria-label="open menu">
            <Icon as={IoMenu} w="12" h="12" />
          </Button>

          <Drawer isOpen={isOpen} onClose={onClose} isFullHeight placement="top">
            <DrawerCloseButton color="white" size="lg" mr="3" mt="6" zIndex="skipLink" />

            <DrawerContent bgColor="brand.dark">
              <DrawerBody p="0">
                <NavigationLinks />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <NavigationLinks />
      )}
    </Flex>
  );
}
