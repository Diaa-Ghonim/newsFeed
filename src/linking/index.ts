const config = {
  screens: {
    Home: {
      path: '/',
      screens: {
        Feed: {
          path: 'feed',
        },
        Setting: {
          path: 'setting',
        },
      },
    },
    ArticleDetails: {
      path: 'article-details/:articleId',
      parse: {
        id: (articleId: string) => `${articleId}`,
      },
    },
  },
};

export const linking = {
  prefixes: ['news://app'],
  config,
};
