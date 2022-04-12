import {combineReducers} from 'redux';
import {newsReducer as news} from './news';

export const reducers = () => combineReducers({news});
