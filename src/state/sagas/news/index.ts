import {all, call, fork, put, takeLatest} from 'redux-saga/effects';

import {getNewsFail, getNewsPending, getNewsSuccess} from '../../actions';
import {GET_NEWS} from '../../actions/News/action.types';
import {getNewsAPI} from '../../services';
import {GetNewsRequestSuccessResponse} from '../../types';

export function* getNews() {
  try {
    yield put(getNewsPending());
    const data: GetNewsRequestSuccessResponse = yield call(getNewsAPI);
    // if (response) {
    yield put(getNewsSuccess(data));
    // } else {
    //   console.log(error, 'error error');
    //   yield put(getNewsFail(error));
    // }
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
