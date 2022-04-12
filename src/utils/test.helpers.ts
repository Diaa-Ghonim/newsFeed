import {runSaga} from 'redux-saga';
import {FakeGlobalState, Action} from '../state/types';

export async function customRunSaga<T>(
  fakeState: FakeGlobalState,
  sagaFunc: (...sagaArgs: any[]) => Generator,
  ...args: T[]
) {
  const dispatchedActions: Action[] = [];
  const fakeStore = {
    getState: () => fakeState,
    dispatch: (action: Action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, sagaFunc, ...args);
  return dispatchedActions;
}
