import produce from 'immer';

export function createReducer<IState, IHandlers extends {[key: string]: any}>(
  initialState: IState,
  handlers: IHandlers,
) {
  return (
    state = initialState,
    {type, payload}: {type: string; payload: any},
  ): IState =>
    produce(state, (draftState: IState) => {
      if (handlers[type]) {
        handlers[type](draftState, payload);
      }
    });
}
