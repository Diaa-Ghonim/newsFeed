import {ApiRequestErrorResponse} from '../common';

export interface ArticleFromResponse {}

export interface Article {
  id?: string;
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
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
  articles: Article[];
}

export interface NewsQuery {
  page: number;
  pageSize: number;
  q: string;
  from: string;
  to: string;
  sortedBy: string;
  apiKey: string;
}
export interface NewsState {
  loading: boolean;
  articles: Article[];
  errMsg: string;
  query: NewsQuery;
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

export type UpdateNewsQueryPage = (page: number) => {
  type: string;
  payload: {page: number};
};

export type UpdateNewsQueryPageSize = (pageSize: number) => {
  type: string;
  payload: {pageSize: number};
};

export type UpdateNewsQueryQ = (to: string) => {
  type: string;
  payload: {to: string};
};

export type UpdateNewsQueryFrom = (from: string) => {
  type: string;
  payload: {from: string};
};

export type UpdateNewsQueryTo = (to: string) => {
  type: string;
  payload: {to: string};
};

export type UpdateNewsQuerySortedBy = (sortedBy: string) => {
  type: string;
  payload: {sortedBy: string};
};

// export type NewsActionTypes =
//   | GetNews
//   | GetNewsSuccess
//   | GetNewsPending
//   | GetNewsFail
//   | UpdateNewsQueryQ
//   | UpdateNewsQueryFrom
//   | UpdateNewsQueryTo
//   | UpdateNewsQuerySortedBy;
