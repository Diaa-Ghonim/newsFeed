import {createAction} from '../../../utils/action.helpers';
import {GET_NEWS} from './action.types';
import {
  GetNews,
  GetNewsPending,
  GetNewsSuccess,
  GetNewsFail,
} from '../../types';

export const getNews: GetNews = createAction(GET_NEWS.ACTION);

export const getNewsPending: GetNewsPending = createAction(GET_NEWS.PENDING);

export const getNewsSuccess: GetNewsSuccess = createAction(
  GET_NEWS.SUCCESS,
  'response',
);

export const getNewsFail: GetNewsFail = createAction(GET_NEWS.ERROR, 'error');
