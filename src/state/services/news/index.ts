import {
  ApiRequestErrorResponse,
  GetNewsRequestSuccessResponse,
} from '../../types';

export const getNewsAPI = (): Promise<
  GetNewsRequestSuccessResponse | ApiRequestErrorResponse
> => {
  return fetch('').then(res => res.json());
};
