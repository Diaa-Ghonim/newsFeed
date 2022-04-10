import {Selector} from 'react-redux';
import {GlobalState, NewsState} from '../../types';

export const selectNewsState: Selector<GlobalState, NewsState> = state =>
  state.news;
