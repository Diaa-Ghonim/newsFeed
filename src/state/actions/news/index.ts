import {createAction} from '../../../utils/action.helpers';
import {
  GET_NEWS,
  UPDATE_NEWS_QUERY_Q,
  UPDATE_NEWS_QUERY_FROM,
  UPDATE_NEWS_QUERY_TO,
  UPDATE_NEWS_QUERY_SORTED_BY,
  UPDATE_NEWS_QUERY_PAGE_SIZE,
  UPDATE_NEWS_QUERY_PAGE,
} from './action.types';
import {
  GetNews,
  GetNewsPending,
  GetNewsSuccess,
  GetNewsFail,
  UpdateNewsQueryQ,
  UpdateNewsQueryFrom,
  UpdateNewsQueryTo,
  UpdateNewsQuerySortedBy,
  UpdateNewsQueryPage,
  UpdateNewsQueryPageSize,
} from '../../types';

export const getNews: GetNews = createAction(GET_NEWS.ACTION);

export const getNewsPending: GetNewsPending = createAction(GET_NEWS.PENDING);

export const getNewsSuccess: GetNewsSuccess = createAction(
  GET_NEWS.SUCCESS,
  'response',
);

export const getNewsFail: GetNewsFail = createAction(GET_NEWS.ERROR, 'error');
export const updateNewsQueryPage: UpdateNewsQueryPage = createAction(
  UPDATE_NEWS_QUERY_PAGE,
  'page',
);
export const updateNewsQueryPageSize: UpdateNewsQueryPageSize = createAction(
  UPDATE_NEWS_QUERY_PAGE_SIZE,
  'pageSize',
);
export const updateNewsQueryQ: UpdateNewsQueryQ = createAction(
  UPDATE_NEWS_QUERY_Q,
  'q',
);
export const updateNewsQueryFrom: UpdateNewsQueryFrom = createAction(
  UPDATE_NEWS_QUERY_FROM,
  'from',
);
export const updateNewsQueryTo: UpdateNewsQueryTo = createAction(
  UPDATE_NEWS_QUERY_TO,
  'to',
);
export const updateNewsQuerySortedBy: UpdateNewsQuerySortedBy = createAction(
  UPDATE_NEWS_QUERY_SORTED_BY,
  'sortedBy',
);
