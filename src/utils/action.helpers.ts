export const createAction = (type: string, ...argNames: any[]) =>
  function (...args: any[]) {
    const action: {type: string; payload: any} = {type, payload: {}};
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
    return action;
  };

export const createActionSet = (actionName: string) => ({
  SUCCESS: `${actionName}_SUCCESS`,
  ACTION: actionName,
});

export const createFullActionSet = (actionName: string) => ({
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`,
  ACTION: actionName,
});
