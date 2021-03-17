import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';
import styled from 'styled-components';

import personCardList from '../../../data/board.json';
import socialMediaList from '../../../data/social-media-list.json';
import { PersonCard } from '../../../models/person';
import { SocialMedia } from '../../../models/social-media';
import { Breakpoint, mediaQuery } from '../../../styles';
import Simple from '../../Forms/Contact/Simple';
import SideContainer from '../../UI/Container/SideContainer';
import SectionHeader from '../../UI/Header/SectionHeader';
import ContactCard from './ContactCard';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;

  ${mediaQuery('xl')} {
    flex-direction: row;
    padding: 3rem;
  }

  > * ~ * {
    margin-left: 4rem;
  }
`;

const ContactContainer = styled.div`
  ${mediaQuery('xl')} {
    width: 28rem;
  }
`;

const SectionHeaderStyled = styled(SectionHeader)`
  font-size: ${({ theme }) => theme.sizes.font['2xl']};
`;

const SocialIcons = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  > * ~ * {
    margin-left: 2rem;
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.brand.base};

  &:hover {
    color: ${({ theme }) => theme.colors.brand.dark};
  }
`;

const Cards = styled.article`
  width: 100%;
  margin-top: 4rem;

  ${mediaQuery('xl')} {
    margin-top: unset;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${mediaQuery('md')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type Props = { mt?: string | { [key in Breakpoint]?: string } };

export default function Contact({ mt }: Props) {
  const socialIcon = ({ name }: SocialMedia) => {
    switch (name) {
      case 'Facebook':
        return <IoLogoFacebook size="2.5rem" />;
      case 'Instagram':
        return <IoLogoInstagram size="2.5rem" />;
      case 'Youtube':
        return <IoLogoYoutube size="2.5rem" />;
      default:
        throw new Error('The selected social media does not exists.');
    }
  };

  return (
    <SideContainer mt={mt} side="right">
      <SectionContainer>
        <ContactContainer>
          <SectionHeaderStyled>Fragen? Ansprechen!</SectionHeaderStyled>

          <Simple />

          <SocialIcons>
            {(socialMediaList as SocialMedia[]).map((item) => (
              <SocialLink key={item.id} href={item.href} title={item.name}>
                {socialIcon(item)}
              </SocialLink>
            ))}
          </SocialIcons>
        </ContactContainer>

        <Cards>
          <SectionHeaderStyled>Dein Ansprechpartner</SectionHeaderStyled>

          <CardGrid>
            {(personCardList as PersonCard[]).map((item) => (
              <ContactCard key={item.id} person={item} />
            ))}
          </CardGrid>
        </Cards>
      </SectionContainer>
    </SideContainer>
  );
}
