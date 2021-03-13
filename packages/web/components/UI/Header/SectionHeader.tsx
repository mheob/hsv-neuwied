import { Heading, HeadingProps } from '@chakra-ui/react';

type Props = {
  hideSpacer?: boolean;
  isDarkSpacer?: boolean;
} & HeadingProps;

export default function SectionHeader({
  children,
  hideSpacer = false,
  isDarkSpacer = false,
  ...all
}: Props) {
  return (
    <Heading
      {...(!hideSpacer
        ? {
            _after: {
              d: 'block',
              w: '4.5rem',
              mb: '2rem',
              pb: '0.5rem',
              borderBottom: '2px solid',
              borderBottomColor: isDarkSpacer ? 'brand.dark' : 'brand.base',
              content: '""',
            },
          }
        : {})}
      {...all}
    >
      {children}
    </Heading>
  );
}
