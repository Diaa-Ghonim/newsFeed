import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {GET_NEWS} from '../../../../actions/news/action.types';
import {
  ApiRequestErrorResponse,
  NewsState,
  GetNewsRequestSuccessResponse,
} from '../../../../types';

export const getNewsHandler = {
  [GET_NEWS.PENDING]: (draftState: NewsState) => {
    draftState.loading = true;
  },

  [GET_NEWS.SUCCESS]: (
    draftState: NewsState,
    {response}: {response: GetNewsRequestSuccessResponse},
  ) => {
    draftState.loading = false;
    response.articles = response.articles.map(article => {
      return {...article, id: uuidv4()};
    });
    if (draftState.query.q) {
      draftState.articles = response.articles;
    } else {
      draftState.articles = [...response.articles, ...draftState.articles];
    }
  },

  [GET_NEWS.ERROR]: (
    draftState: NewsState,
    {error}: {error: ApiRequestErrorResponse},
  ) => {
    draftState.loading = false;
    draftState.errMsg = error.message;
  },
};
