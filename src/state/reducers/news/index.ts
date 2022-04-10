import {createReducer} from '../../../utils/createReducer';
import {NewsState} from '../../types';
import {newsHandler} from './handlers';

export const booksInitialState: NewsState = {
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
    apiKey: '63ac834c5f2c4c72abe1bf6f4e8dcdf7',
  },
};

export const booksReducer = createReducer(booksInitialState, newsHandler);
