import Link from 'next/link';
import { ReactNode } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

import { Breakpoint, getTopSpacing } from '../../styles';

type ColorScheme = 'base' | 'dark' | 'light';
type Size = 'large' | 'small';

const getPaddingFromSize = (size: Size) => (size && size === 'large' ? '1rem 2rem' : '0.5rem 1rem');

const getColor = (colorScheme: ColorScheme, theme: DefaultTheme) => {
  switch (colorScheme) {
    case 'dark':
      return { color: 'white', bg: theme.colors.brand.dark, bgHover: theme.colors.brand.base };
    case 'light':
      return { color: 'black', bg: theme.colors.brand.light, bgHover: theme.colors.brand.base };
    case 'base':
    default:
      return { color: 'white', bg: theme.colors.brand.base, bgHover: theme.colors.brand.dark };
  }
};

type ButtonStyledProps = {
  colorScheme: ColorScheme;
  mt?: string | { [key in Breakpoint]: string };
  noTransform?: boolean;
  size?: Size;
};

const ButtonStyles = css<ButtonStyledProps>`
  display: inline-block;
  padding: ${({ size }) => (size ? getPaddingFromSize(size) : '0.75rem 1.5rem')};
  color: ${({ colorScheme, theme }) => getColor(colorScheme, theme).color};
  text-align: center;
  background-color: ${({ colorScheme, theme }) => getColor(colorScheme, theme).bg};
  border-radius: 7px;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: ${({ colorScheme, theme }) => getColor(colorScheme, theme).bgHover};
  }

  &:active {
    outline: none;
    transform: translateY(1px);
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ noTransform }) => noTransform && '&:hover, &:active { transform: translateY(0); }'}

  ${({ mt }) => mt && getTopSpacing(mt)}
`;

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${ButtonStyles}
`;

const AnchorStyled = styled.a<ButtonStyledProps>`
  ${ButtonStyles}
`;

type Props = {
  children?: ReactNode;
  colorScheme?: ColorScheme;
  href?: string;
  mt?: string | { [key in Breakpoint]: string };
  noTransform?: boolean;
  openInNewTab?: boolean;
  size?: Size;
};

export default function Button({
  children,
  colorScheme = 'base',
  href,
  mt,
  noTransform,
  openInNewTab,
  size,
}: Props) {
  if (!href) {
    return (
      <ButtonStyled
        colorScheme={colorScheme}
        mt={mt}
        noTransform={noTransform}
        size={size}
        type="button"
      >
        {children}
      </ButtonStyled>
    );
  } else if (href.startsWith('http') || href?.startsWith('//')) {
    return (
      <AnchorStyled
        colorScheme={colorScheme}
        href={href}
        mt={mt}
        noTransform={noTransform}
        size={size}
        {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </AnchorStyled>
    );
  } else {
    return (
      <Link href={href}>
        <AnchorStyled colorScheme={colorScheme} mt={mt} noTransform={noTransform} size={size}>
          {children}
        </AnchorStyled>
      </Link>
    );
  }
}
