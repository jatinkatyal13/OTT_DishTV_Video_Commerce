import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import reducer, {
  fetchContributors,
  getContributors,
  contributorsLoaded,
  testing
} from './about';

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  fetchMock.restore();
});

test('fetch contributors with success', done => {
  const data = [{
    login: "gvaldambrini",
    avatar_url: "https://avatars3.githubusercontent.com/u/2461921?v=3",
    html_url: "https://github.com/gvaldambrini",
    contributions: 10
  }];

  fetchMock.get(`${testing.repo_url}/contributors`, {status: 200, body: data});

  const store = mockStore();
  const expectedActions = [
    testing.fetchContributorsSuccess(data)
  ];

  return store.dispatch(fetchContributors())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('fetch contributors with error', done => {
  fetchMock.get(`${testing.repo_url}/contributors`, {status: 500});

  const store = mockStore();
  const expectedActions = [
    testing.fetchContributorsFailure('Unable to fetch'),
  ];

  return store.dispatch(fetchContributors())
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
});

test('handle the fetchContributorsSuccess action', () => {
  const initialState = {
    contributors: [],
    loaded: false,
  };

  const data = [{
    login: "gvaldambrini",
    avatar_url: "https://avatars3.githubusercontent.com/u/2461921?v=3",
    html_url: "https://github.com/gvaldambrini",
    contributions: 10
  }];

  const newState = reducer(initialState, testing.fetchContributorsSuccess(data));
  expect(newState.contributors).toEqual([{
    username: "gvaldambrini",
    avatar: "https://avatars3.githubusercontent.com/u/2461921?v=3",
    url: "https://github.com/gvaldambrini",
    contributions: 10
  }]);
  expect(newState.loaded).toEqual(true);
});

test('handle the fetchContributorsFailure action', () => {
  const initialState = {
    contributors: [],
    loaded: false,
  };

  const newState = reducer(initialState, testing.fetchContributorsFailure('Unable to fetch'));
  expect(newState.contributors).toEqual([]);
  expect(newState.loaded).toEqual(true);
});

test('handle an unknown action', () => {
  const newState = reducer();
  expect(newState.contributors).toEqual([]);
  expect(newState.loaded).toEqual(false);
});

test('get the contributors', () => {
  const aboutState = {
    contributors: [{
      login: "gvaldambrini",
      avatar_url: "https://avatars3.githubusercontent.com/u/2461921?v=3",
      html_url: "https://github.com/gvaldambrini",
      contributions: 10
    }],
    loaded: false,
  };

  expect(getContributors({about: aboutState})).toEqual(aboutState.contributors);
});

test('check if contributors are loaded', () => {
  const aboutState = {
    contributors: [],
    loaded: true,
  };

  expect(contributorsLoaded({about: aboutState})).toEqual(true);
});
