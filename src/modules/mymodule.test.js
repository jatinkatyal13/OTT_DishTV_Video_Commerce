import reducer, { increment } from './mymodule';

it('handle the increment action without value', () => {
  const initialState = {
    counter: 3
  };
  const newState = reducer(initialState, increment());
  expect(newState.counter).toEqual(4);
});

it('handle the increment action with a value', () => {
  const initialState = {
    counter: 3
  };
  const newState = reducer(initialState, increment(5));
  expect(newState.counter).toEqual(8);
});

it('handle an unknown action', () => {
  const initialState = {
    counter: 3
  };
  const newState = reducer(initialState, {});
  expect(newState.counter).toEqual(3);
});
