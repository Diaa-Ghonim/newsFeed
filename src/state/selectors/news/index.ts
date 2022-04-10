import {Selector} from 'react-redux';
import {GlobalState, NewsQuery, NewsState} from '../../types';

export const selectNewsState: Selector<GlobalState, NewsState> = state =>
  state.news;

export const selectNewsQuery: Selector<GlobalState, NewsQuery> = state =>
  state.news.query;
