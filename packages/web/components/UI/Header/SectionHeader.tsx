import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Spacer = {
  hideSpacer?: boolean;
  isDarkSpacer?: boolean;
};

const spacerStyles = css<Spacer>`
  ${({ hideSpacer, isDarkSpacer, theme }) =>
    !hideSpacer &&
    `&::after {
      display: block;
      width: 4.5rem;
      margin-bottom: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid;
      border-bottom-color: ${isDarkSpacer ? theme.colors.brand.dark : theme.colors.brand.base};
      content: '';
    }`}
`;

const H1 = styled.h1`
  font-weight: normal;
  ${spacerStyles}
`;

const H2 = styled.h2`
  font-weight: normal;
  ${spacerStyles}
`;

type Props = {
  level?: 'h1' | 'h2';
  children?: ReactNode;
  className?: string;
} & Spacer;

export default function SectionHeader({
  level = 'h2',
  children,
  className,
  hideSpacer = false,
  isDarkSpacer = false,
}: Props) {
  if (level === 'h1') {
    return (
      <H1 className={className} hideSpacer={hideSpacer} isDarkSpacer={isDarkSpacer}>
        {children}
      </H1>
    );
  }

  return (
    <H2 className={className} hideSpacer={hideSpacer} isDarkSpacer={isDarkSpacer}>
      {children}
    </H2>
  );
}
