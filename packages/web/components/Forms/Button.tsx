import Link from 'next/link';
import { ReactNode } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

import { Breakpoint, getTopSpacing } from '../../styles';
import { getRgbaStringFromHex } from '../../utils/stylings';

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
  fontSize?: string;
  mt?: string | { [key in Breakpoint]: string };
  noTransform?: boolean;
  size?: Size;
};

const ButtonStyles = css<ButtonStyledProps>`
  display: inline-block;
  padding: ${({ size }) => (size ? getPaddingFromSize(size) : '0.75rem 1.5rem')};
  color: ${({ colorScheme, theme }) => getColor(colorScheme, theme).color};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
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
    color: ${({ theme }) => theme.colors.gray.base};
    background: repeating-linear-gradient(
      -55deg,
      ${({ theme }) => getRgbaStringFromHex(theme.colors.brand.base, 0.8)},
      ${({ theme }) => getRgbaStringFromHex(theme.colors.brand.base, 0.8)} 10px,
      ${({ theme }) => getRgbaStringFromHex(theme.colors.brand.base, 0.9)} 10px,
      ${({ theme }) => getRgbaStringFromHex(theme.colors.brand.base, 0.9)} 20px
    );
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
  className?: string;
  colorScheme?: ColorScheme;
  disabled?: boolean;
  fontSize?: string;
  href?: string;
  mt?: string | { [key in Breakpoint]: string };
  noTransform?: boolean;
  openInNewTab?: boolean;
  size?: Size;
  type?: 'button' | 'reset' | 'submit';
};

export default function Button({
  children,
  className,
  colorScheme = 'base',
  disabled = false,
  fontSize,
  href,
  mt,
  noTransform,
  openInNewTab,
  size,
  type = 'button',
}: Props) {
  if (!href) {
    return (
      <ButtonStyled
        colorScheme={colorScheme}
        className={className}
        fontSize={fontSize}
        mt={mt}
        noTransform={noTransform}
        size={size}
        type={type}
        disabled={disabled}
      >
        {children}
      </ButtonStyled>
    );
  } else if (href.startsWith('http') || href?.startsWith('//')) {
    return (
      <AnchorStyled
        colorScheme={colorScheme}
        className={className}
        fontSize={fontSize}
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
        <AnchorStyled
          colorScheme={colorScheme}
          className={className}
          fontSize={fontSize}
          mt={mt}
          noTransform={noTransform}
          size={size}
        >
          {children}
        </AnchorStyled>
      </Link>
    );
  }
}
