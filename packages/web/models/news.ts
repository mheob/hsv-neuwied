export enum ArticleCategory {
  HAUPTVEREIN = 'hauptverein',
  NACHWUCHS = 'nachwuchs',
  RHEIN_DIAMANTEN = 'rhein-diamanten',
  SENIOREN = 'senioren',
  TURNKLOETZCHEN = 'turnkloetzchen',
}

export type ArticleCategoryType = {
  id: string;
  name: string;
  slug: string;
};

export type Article = {
  id: string;
  title: string;
  teaser: string;
  category: ArticleCategoryType | ArticleCategoryType[];
  featuredImage: {
    src: string;
    alt: string;
    caption: string;
  };
  body: string;
  slug: string;
  createdAt: string;
  modifiedAt?: string;
};

export const defaultArticle: Article = {
  id: '',
  title: '',
  teaser: '',
  category: { id: '', name: '', slug: '' },
  featuredImage: { src: '', alt: '', caption: '' },
  body: '',
  slug: '',
  createdAt: '',
};
