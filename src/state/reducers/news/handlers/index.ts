import {getNewsHandler} from './getNews';
import {updateNewsQuery} from './updateNewsQuery';

export const newsHandler = {
  ...getNewsHandler,
  ...updateNewsQuery,
};
