import NextLink from 'next/link';
import { IoCalendar, IoNewspaper } from 'react-icons/io5';
import styled from 'styled-components';

import { ArticleCategoryType } from '../../models/news';

const Container = styled.div`
  color: ${({ theme }) => theme.colors.gray.base};
  font-size: ${({ theme }) => theme.sizes.font.sm};
`;

const MetaRow = styled.div`
  > :first-child {
    margin-left: 0.5rem;
  }
`;

const CategoryLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.gray.dark};
  }

  &:not(:last-of-type)::after {
    content: ', ';
  }
`;

type Props = {
  creationDate: string;
  categories?: ArticleCategoryType[];
};

export default function Meta({ creationDate, categories }: Props) {
  return (
    <Container>
      <MetaRow>
        <IoCalendar size="1.25rem" />
        {creationDate}
      </MetaRow>

      <MetaRow>
        <IoNewspaper size="1.25rem" />
        {categories &&
          categories.map((category) => (
            <NextLink key={category.id} href={`/${category.slug}/news`}>
              <CategoryLink>{category.name}</CategoryLink>
            </NextLink>
          ))}
      </MetaRow>
    </Container>
  );
}
