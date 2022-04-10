import {all, call, fork, put, select, takeLatest} from 'redux-saga/effects';

import {getNewsFail, getNewsPending, getNewsSuccess} from '../../actions';
import {GET_NEWS} from '../../actions/news/action.types';
import {selectNewsQuery} from '../../selectors';
import {getNewsAPI} from '../../services';
import {GetNewsRequestSuccessResponse, NewsQuery} from '../../types';

export function* getNews() {
  try {
    yield put(getNewsPending());
    const newsQuery: NewsQuery = yield select(selectNewsQuery);
    const data: GetNewsRequestSuccessResponse = yield call(
      getNewsAPI,
      newsQuery,
    );
    // console.log('data', data);
    yield put(getNewsSuccess(data));
  } catch (error: any) {
    console.log(error, 'error error');
    yield put(getNewsFail(error));
  }
}

function* watchGetNewsSaga() {
  yield takeLatest(GET_NEWS.ACTION, getNews);
}

export function* NewsSagas() {
  yield all([fork(watchGetNewsSaga)]);
}
