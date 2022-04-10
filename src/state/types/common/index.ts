import {NewsState} from '..';

export type GlobalState = Readonly<{
  news: NewsState;
}>;

export interface Action {
  type: string;
  payload: any;
}

export type FakeGlobalState = Readonly<{
  news?: NewsState;
}>;

export interface ApiRequestErrorResponse {
  message: string;
  // error: {
  // };
}
