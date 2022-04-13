import {createReducer} from '../../../utils/createReducer';
import {NewsState} from '../../types';
import {newsHandler} from './handlers';

export const newsInitialState: NewsState = {
  loading: false,
  articles: [],
  errMsg: '',
  query: {
    page: 1,
    pageSize: 10,
    q: 'cia',
    from: '2022-03-10',
    to: '',
    sortedBy: 'popularity',
  },
};

export const newsReducer = createReducer(newsInitialState, newsHandler);
