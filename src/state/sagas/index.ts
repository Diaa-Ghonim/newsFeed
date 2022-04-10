import {all} from 'redux-saga/effects';
import {NewsSagas} from './news';
export default function* rootSaga() {
  yield all([NewsSagas()]);
}
