import {getNews as getNewsSaga} from '.';
import {
  failureResponse,
  fakeGetNewsFailAction,
  fakeGetNewsPendingAction,
  fakeGetNewsSuccessAction,
  fakeMainStateWithNewsState,
  getNewsSuccessResponse,
} from '../../../fakeData';
import {customRunSaga} from '../../../utils/test.helpers';
import {getNewsAPI} from '../../services';
import {
  ApiRequestErrorResponse,
  GetNewsRequestSuccessResponse,
} from '../../types';

jest.mock('../../services/news');
describe('Get news', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch two actions, firstly is pending then the success action with response if request success', async () => {
    (
      getNewsAPI as jest.Mock<Promise<GetNewsRequestSuccessResponse>>
    ).mockReturnValue(getNewsSuccessResponse);

    const dispatchedActions = await customRunSaga(
      fakeMainStateWithNewsState,
      getNewsSaga,
    );

    expect(getNewsAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual(fakeGetNewsPendingAction);
    expect(dispatchedActions[1]).toEqual(fakeGetNewsSuccessAction);
  });

  it('should dispatch two actions, firstly the pending then fail action if request fail', async () => {
    (getNewsAPI as jest.Mock<Promise<ApiRequestErrorResponse>>).mockReturnValue(
      failureResponse,
    );

    const dispatchedActions = await customRunSaga(
      fakeMainStateWithNewsState,
      getNewsSaga,
    );
    expect(getNewsAPI).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toHaveLength(2);
    expect(dispatchedActions[0]).toEqual(fakeGetNewsPendingAction);
    expect(dispatchedActions[1]).toEqual(fakeGetNewsFailAction);
  });
});
