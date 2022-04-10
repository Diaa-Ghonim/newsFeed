import {createReducer} from '../../../utils/createReducer';
import {NewsState} from '../../types';
import {newsHandler} from './handlers';

export const booksInitialState: NewsState = {
  loading: false,
  articles: [],
  errMsg: '',
};

export const booksReducer = createReducer(booksInitialState, newsHandler);
