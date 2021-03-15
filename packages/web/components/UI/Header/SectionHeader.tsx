import { ReactNode } from 'react';
import { css } from 'styled-components';

const spacerStyle = (isDarkSpacer: boolean) => css`
  &::after {
    display: block;
    width: 4.5rem;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid;
    border-bottom-color: ${isDarkSpacer ? 'brand.dark' : 'brand.base'};
    content: '';
  }
`;

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  hideSpacer?: boolean;
  isDarkSpacer?: boolean;
};

export default function SectionHeader({
  as = 'h2',
  children,
  hideSpacer = false,
  isDarkSpacer = false,
}: Props) {
  const HeaderTag = as;

  return (
    <HeaderTag {...(!hideSpacer ? { css: spacerStyle(isDarkSpacer) } : {})}>{children}</HeaderTag>
  );
}
