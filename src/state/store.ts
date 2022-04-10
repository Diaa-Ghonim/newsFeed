import {createStore, applyMiddleware} from 'redux';
import {reducers} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers(),
    initialState,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore();

export default store;
