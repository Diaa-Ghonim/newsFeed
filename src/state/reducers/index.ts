import {combineReducers} from 'redux';
import {booksReducer as news} from './news';

export const reducers = () => combineReducers({news});
