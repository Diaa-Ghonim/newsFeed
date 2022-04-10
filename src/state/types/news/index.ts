import {ApiRequestErrorResponse} from '../common';

export interface ArticleFromResponse {}

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: [Article];
}

export interface NewsState {
  loading: boolean;
  articles: Article[];
  errMsg: string;
}

export type GetNewsRequestSuccessResponse = NewsResponse;

export interface GetNewsActionData {
  type: string;
  payload: {[key: string]: unknown};
}

export type GetNews = () => GetNewsActionData;

export type GetNewsSuccess = (response: GetNewsRequestSuccessResponse) => {
  type: string;
  payload: {response: GetNewsRequestSuccessResponse};
};

export type GetNewsPending = () => {
  type: string;
  payload: {[key: string]: unknown};
};

export type GetNewsFail = (error: ApiRequestErrorResponse) => {
  type: string;
  payload: {error: ApiRequestErrorResponse};
};
