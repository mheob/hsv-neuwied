import Image from 'next/image';
import { IoCall, IoMail } from 'react-icons/io5';
import styled, { css } from 'styled-components';

import { PersonCard as PersonCardType } from '../../../models/person';
import { Breakpoint, getTopSpacing, mediaQuery } from '../../../styles';
import ContactLink from '../../Utils/ContactLink';

type CardProps = {
  mt?: string | { [key in Breakpoint]?: string };
};

const Card = styled.div<CardProps>`
  ${({ mt }) => mt && getTopSpacing(mt)}

  ${mediaQuery('lg')} {
    position: relative;
  }
`;

const ContactSection = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.brand.base};
  transition: 300ms ease height;

  ${mediaQuery('lg')} {
    position: absolute;
    right: 0;
    bottom: 6px; /* TODO: Check if this could set better */
    left: 0;
    height: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.brand.light};
  }

  > * ~ * {
    border-left: 1px solid ${({ theme }) => theme.colors.brand.light};
  }

  [role='group']:hover & {
    height: 20%;
  }
`;

const ContactLinkStyled = styled(ContactLink)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray.light};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.light};
  }
`;

const iconStyles = css`
  width: 2.5rem;
  height: 0;
  transition: 300ms ease height;

  [role='group']:hover & {
    height: 2.5rem;
  }
`;

type Props = { person: PersonCardType } & CardProps;

export default function PersonCard({ person, mt }: Props) {
  return (
    <Card mt={mt} role="group">
      <Image
        src={person.image}
        alt={`${person.name} - ${person.position}`}
        width={420}
        height={600}
      />

      <ContactSection>
        {person.mail && (
          <ContactLinkStyled href={`mailto:${person.mail}`} title={person.mail}>
            <IoMail css={iconStyles} />
          </ContactLinkStyled>
        )}

        {person.tel && (
          <ContactLinkStyled href={`tel:${person.tel.replace(/\s/g, '')}`} title={person.tel}>
            <IoCall css={iconStyles} />
          </ContactLinkStyled>
        )}
      </ContactSection>
    </Card>
  );
}
