export const invalidAction = {
  type: 'INVALID_ACTION',
  payload: {},
};

export const failureResponse = Promise.reject({
  message: 'Something Went Wrong',
});
