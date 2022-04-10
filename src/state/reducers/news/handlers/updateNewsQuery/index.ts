import {
  UPDATE_NEWS_QUERY_Q,
  UPDATE_NEWS_QUERY_FROM,
  UPDATE_NEWS_QUERY_TO,
  UPDATE_NEWS_QUERY_SORTED_BY,
  UPDATE_NEWS_QUERY_PAGE,
  UPDATE_NEWS_QUERY_PAGE_SIZE,
} from '../../../../actions/news/action.types';
import {NewsState} from '../../../../types';

export const updateNewsQuery = {
  [UPDATE_NEWS_QUERY_PAGE]: (draftState: NewsState, {page}: {page: string}) => {
    draftState.query.page = Number(page);
  },

  [UPDATE_NEWS_QUERY_PAGE_SIZE]: (
    draftState: NewsState,
    {pageSize}: {pageSize: string},
  ) => {
    draftState.query.pageSize = Number(pageSize);
  },

  [UPDATE_NEWS_QUERY_Q]: (draftState: NewsState, payload: {q: string}) => {
    draftState.query.q = payload.q;
  },

  [UPDATE_NEWS_QUERY_FROM]: (draftState: NewsState, {from}: {from: string}) => {
    draftState.query.from = from;
  },

  [UPDATE_NEWS_QUERY_TO]: (draftState: NewsState, {to}: {to: string}) => {
    draftState.query.to = to;
  },

  [UPDATE_NEWS_QUERY_SORTED_BY]: (
    draftState: NewsState,
    {sortBy}: {sortBy: string},
  ) => {
    draftState.query.sortedBy = sortBy;
  },
};
