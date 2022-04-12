/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ApiRequestErrorResponse,
  GetNewsRequestSuccessResponse,
  NewsQuery,
} from '../../types';
import {NEWS_API} from '@env';
import * as data from '../../../../data/data.json';

export const getNewsAPI = (
  newsQuery: NewsQuery,
): Promise<GetNewsRequestSuccessResponse | ApiRequestErrorResponse> => {
  const {page, pageSize, q, from, to, sortedBy, apiKey} = newsQuery;
  let urlQuery = `?page=${page}&pageSize=${pageSize}&q=${q}&from=${from}&to${to}&sortBy=${sortedBy}&apiKey=${apiKey}`;
  console.log('NEWS_API', NEWS_API + urlQuery);
  return new Promise((resolve, reject) => {
    /**
     * I fetched data from json file because API limit the number of requests
     */

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

    /**
     * if you want to use this api you can create api key on this site
     * https://newsapi.org/
     * then add this key to .env file
     * then comment the above code and un comment the below code
     */

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
};
