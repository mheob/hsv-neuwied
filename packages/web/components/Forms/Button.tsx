import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  colorScheme?: 'light' | 'base' | 'dark';
} & ButtonProps;

export default function Button({ children, colorScheme = 'base', ...all }: Props) {
  const backgroundColor = () => {
    switch (colorScheme) {
      case 'light':
        return { base: 'brand.light', hover: 'brand.base' };
      case 'dark':
        return { base: 'brand.dark', hover: 'brand.base' };
      case 'base':
      default:
        return { base: 'brand.base', hover: 'brand.dark' };
    }
  };

  return (
    <ChakraButton
      bgColor={backgroundColor().base}
      color="white"
      boxShadow="0px 3px 5px 1px rgba(0, 0, 0, 0.3)"
      _active={{
        bgColor: backgroundColor().hover,
        transform: 'translateY(1px)',
        shadow: 'md',
      }}
      _hover={{
        bgColor: backgroundColor().hover,
      }}
      {...all}
    >
      {children}
    </ChakraButton>
  );
}
