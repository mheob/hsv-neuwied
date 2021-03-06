import { Flex, Heading } from '@chakra-ui/react';

type Props = { title?: string };

export default function Hero({ title = 'with-chakra-ui-typescript' }: Props) {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  );
}
