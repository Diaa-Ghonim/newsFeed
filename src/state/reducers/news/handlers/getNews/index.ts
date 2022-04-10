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
    draftState.articles = [...response.articles, ...draftState.articles];
  },

  [GET_NEWS.ERROR]: (
    draftState: NewsState,
    {error}: {error: ApiRequestErrorResponse},
  ) => {
    draftState.loading = false;
    draftState.errMsg = error.message;
  },
};
