import {
  ApiRequestErrorResponse,
  GetNewsRequestSuccessResponse,
  NewsQuery,
} from '../../types';
import {NEWS_API} from '@env';
import * as data from '../../../../data/data.json';

/**
 * we will change this soon
 * I fetched data from json file to reduce the number of requests
 */
export const getNewsAPI = (
  newsQuery: NewsQuery,
): Promise<GetNewsRequestSuccessResponse | ApiRequestErrorResponse> => {
  const {page, pageSize, q, from, to, sortedBy, apiKey} = newsQuery;
  let urlQuery = `?page=${page}&pageSize=${pageSize}&q=${q}&from=${from}&to${to}&sortBy=${sortedBy}&apiKey=${apiKey}`;
  console.log('NEWS_API', NEWS_API + urlQuery);
  return new Promise(resolve => {
    if (q) {
      console.log('q', q);
      const filterdData = data.articles.filter(item =>
        item.title.toLowerCase().includes(q.toLowerCase()),
      );
      console.log('filterdData', filterdData.length);
      resolve({...data, articles: filterdData});
    } else {
      resolve(data);
    }
    // fetch(NEWS_API + urlQuery)
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log('called');
    //     if (response.status === 'error') {
    //       reject(response);
    //     }
    //     resolve(response);
    //   })
    //   .catch(error => {
    //     reject(error);
    //   });
  });
  // return fetch(url).then(response => response.json());
};
