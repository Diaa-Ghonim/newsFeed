import {
  ApiRequestErrorResponse,
  GetNewsRequestSuccessResponse,
} from '../../types';
var url =
  'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2022-04-10&' +
  'sortBy=popularity&' +
  'apiKey=63ac834c5f2c4c72abe1bf6f4e8dcdf7';

export const getNewsAPI = (): Promise<
  GetNewsRequestSuccessResponse | ApiRequestErrorResponse
> => {
  return fetch(url).then(res => res.json());
};
