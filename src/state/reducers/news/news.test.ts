import {newsInitialState, newsReducer} from '.';
import {
  fakeGetNewsFailAction,
  fakeGetNewsPendingAction,
  fakeGetNewsSuccessAction,
  fakeUpdateNewsQueryFrom,
  fakeUpdateNewsQueryPage,
  fakeUpdateNewsQueryPageSize,
  fakeUpdateNewsQueryQ,
  fakeUpdateNewsQuerySortedBy,
  fakeUpdateNewsQueryTo,
  invalidAction,
} from '../../../fakeData';

describe('News reducer', () => {
  describe('get News', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const newsState = newsReducer(undefined, invalidAction);
      expect(newsState).toEqual(newsInitialState);
    });

    it('should update loading prop to (true) when action pending dispatched', () => {
      const newsState = newsReducer(undefined, fakeGetNewsPendingAction);
      expect(newsState).toEqual({
        ...newsInitialState,
        loading: true,
      });
    });

    it('should update news in reducer when action success dispatched and change loading to (false)', () => {
      const newsState = newsReducer(undefined, fakeGetNewsPendingAction);
      const updatednewsState = newsReducer(newsState, fakeGetNewsSuccessAction);
      expect(updatednewsState).toEqual({
        ...newsState,
        loading: false,
        articles: fakeGetNewsSuccessAction.payload.response.articles,
      });
    });

    it('should update loading prop to (false) when action fail dispatched.', () => {
      const newsState = newsReducer(undefined, fakeGetNewsPendingAction);
      const updatednewsState = newsReducer(newsState, fakeGetNewsFailAction);
      expect(updatednewsState).toEqual({
        ...newsState,
        loading: false,
        errMsg: fakeGetNewsFailAction.payload.error.message,
      });
    });
  });

  describe('Update query', () => {
    it('should change query (q) key', () => {
      const newsState = newsReducer(undefined, invalidAction);
      const updatednewsState = newsReducer(newsState, fakeUpdateNewsQueryQ);
      expect(updatednewsState).toEqual({
        ...newsState,
        query: {
          ...newsState.query,
          q: fakeUpdateNewsQueryQ.payload.q,
        },
      });
    });

    it('should change query (from) key', () => {
      const newsState = newsReducer(undefined, invalidAction);
      const updatednewsState = newsReducer(newsState, fakeUpdateNewsQueryFrom);
      expect(updatednewsState).toEqual({
        ...newsState,
        query: {
          ...newsState.query,
          from: fakeUpdateNewsQueryFrom.payload.from,
        },
      });
    });

    it('should change query (to) key', () => {
      const newsState = newsReducer(undefined, invalidAction);
      const updatednewsState = newsReducer(newsState, fakeUpdateNewsQueryTo);
      expect(updatednewsState).toEqual({
        ...newsState,
        query: {
          ...newsState.query,
          to: fakeUpdateNewsQueryTo.payload.to,
        },
      });
    });

    it('should change query (page) key', () => {
      const newsState = newsReducer(undefined, invalidAction);
      const updatednewsState = newsReducer(newsState, fakeUpdateNewsQueryPage);
      expect(updatednewsState).toEqual({
        ...newsState,
        query: {
          ...newsState.query,
          page: fakeUpdateNewsQueryPage.payload.page,
        },
      });
    });

    it('shoud cahnge query (pageSize) key', () => {
      const newsState = newsReducer(undefined, invalidAction);
      const updatednewsState = newsReducer(
        newsState,
        fakeUpdateNewsQueryPageSize,
      );
      expect(updatednewsState).toEqual({
        ...newsState,
        query: {
          ...newsState.query,
          pageSize: fakeUpdateNewsQueryPageSize.payload.pageSize,
        },
      });
    });

    it('shoud change query (sortedBy) key', () => {
      const newsState = newsReducer(undefined, invalidAction);
      const updatednewsState = newsReducer(
        newsState,
        fakeUpdateNewsQuerySortedBy,
      );
      expect(updatednewsState).toEqual({
        ...newsState,
        query: {
          ...newsState.query,
          sortedBy: fakeUpdateNewsQuerySortedBy.payload.sortBy,
        },
      });
    });
  });
});
