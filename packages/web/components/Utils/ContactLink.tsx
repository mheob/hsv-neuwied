/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link, LinkProps } from '@chakra-ui/react';
import { CSSProperties, useState } from 'react';

type Props = {
  header?: {
    [index: string]: string | undefined;
    bcc?: string;
    body?: string;
    cc?: string;
    subject?: string;
  };
} & LinkProps;

export default function ContactLink({ header, children, href, style, title, ...all }: Props) {
  const [humanInteractionState, setHumanInteractionState] = useState(false);

  const handleCopiability = () => {
    setHumanInteractionState(true);
  };

  const createContactLink = () => {
    const combinedHeader =
      header &&
      Object.keys(header)
        .map((key) => `${key}=${encodeURIComponent(header[key]!)}`)
        .join('&');

    if (href?.startsWith('mailto:')) {
      return header ? `${href}?${combinedHeader}` : href;
    }

    if (href?.startsWith('tel:')) {
      return href;
    }
  };

  const reverse = (stringToReverse: string) => {
    return stringToReverse.split('').reverse().join('').replace('(', ')').replace(')', '(');
  };

  const directionStyle: CSSProperties = {
    ...(style || {}),
    unicodeBidi: 'bidi-override',
    direction: humanInteractionState ? 'ltr' : 'rtl',
  };

  const renderProps: LinkProps = {
    ...all,
    href: humanInteractionState === true ? createContactLink() : 'obfuscated',
    onFocus: handleCopiability,
    onMouseOver: handleCopiability,
    onContextMenu: handleCopiability,
    style: directionStyle,
    title,
  };

  return (
    <Link {...renderProps}>
      {children ? children : humanInteractionState ? href : reverse(href!)}
    </Link>
  );
}
