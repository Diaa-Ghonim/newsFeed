import {
  GET_NEWS,
  UPDATE_NEWS_QUERY_FROM,
  UPDATE_NEWS_QUERY_TO,
  UPDATE_NEWS_QUERY_PAGE,
  UPDATE_NEWS_QUERY_PAGE_SIZE,
  UPDATE_NEWS_QUERY_Q,
  UPDATE_NEWS_QUERY_SORTED_BY,
} from '../../state/actions/news/action.types';
import {Article, NewsResponse, NewsState} from '../../state/types';

export const fakeArticle: Article = {
  source: {
    id: 'the-verge',
    name: 'The Verge',
  },
  author: 'Jay Peters',
  title:
    'Block and Blockstream are partnering with Tesla on an off-grid, solar-powered Bitcoin mine in Texas',
  description:
    'Block and Blockstream are partnering with Tesla on an open-source, solar-powered Bitcoin mine, the companies announced Friday. Tesla’s 3.8-megawatt Solar PV array and its 12 megawatt-hour Megapack will power the facility, and construction has started on the p…',
  url: 'https://www.theverge.com/2022/4/8/23016553/block-blockstream-tesla-solar-bitcoin-mine-texas',
  urlToImage:
    'https://cdn.vox-cdn.com/thumbor/OYrvaaOHBuEpdTeRO55nZnZdexs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937281/acastro_170726_1777_0007_v2.jpg',
  publishedAt: '2022-04-08T16:02:52Z',
  content:
    'Its set to open later this year\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nBlock and Blockstream, a … [+1336 chars]',
};

export const fakeNews: NewsResponse = {
  status: 'ok',
  totalResults: 1,
  articles: [],
};

export const fakeNewsState: NewsState = {
  loading: false,
  articles: [fakeArticle],
  errMsg: '',
  query: {
    page: 1,
    pageSize: 10,
    q: 'cia',
    from: '2022-03-10',
    to: '',
    sortedBy: 'popularity',
    apiKey: '63ac834c5f2c4c72abe1bf6f4e8dcdf7',
  },
};

export const fakeMainStateWithNewsState: {
  news: NewsState;
} = {
  news: fakeNewsState,
};

export const fakeGetNewsPendingAction = {
  type: GET_NEWS.PENDING,
  payload: {},
};

export const fakeGetNewsSuccessAction = {
  type: GET_NEWS.SUCCESS,
  payload: {response: fakeNews},
};

export const fakeGetNewsFailAction = {
  type: GET_NEWS.ERROR,
  payload: {error: {message: 'Something Went Wrong'}},
};

export const getNewsSuccessResponse = Promise.resolve(fakeNews);

export const fakeUpdateNewsQueryQ = {
  type: UPDATE_NEWS_QUERY_Q,
  payload: {q: 'bitcoin'},
};

export const fakeUpdateNewsQueryFrom = {
  type: UPDATE_NEWS_QUERY_FROM,
  payload: {from: '2022-03-10'},
};

export const fakeUpdateNewsQueryTo = {
  type: UPDATE_NEWS_QUERY_TO,
  payload: {to: '2022-03-10'},
};

export const fakeUpdateNewsQueryPage = {
  type: UPDATE_NEWS_QUERY_PAGE,
  payload: {page: 2},
};

export const fakeUpdateNewsQueryPageSize = {
  type: UPDATE_NEWS_QUERY_PAGE_SIZE,
  payload: {pageSize: 10},
};

export const fakeUpdateNewsQuerySortedBy = {
  type: UPDATE_NEWS_QUERY_SORTED_BY,
  payload: {sortBy: 'popularity'},
};
