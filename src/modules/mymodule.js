// ------------------------------------
// Constants

const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Action creators

export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  };
}

// ------------------------------------
// Selectors

export const getCounter = state => state.mymodule.counter;

// ------------------------------------
// Store & reducer

const initialState = {
  counter: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case COUNTER_INCREMENT:
    return Object.assign(
      {},
      state,
      {counter: state.counter + action.payload});
  default:
    return state;
  }
}
