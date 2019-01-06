import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }

    case 'DECREMENT': {
      return state - 1;
    }

    case 'INCREMENT_BY': {
      return state + action.by;
    }

    case 'DECREMENT_BY': {
      return state - action.by;
    }

    case 'SET_TO': {
      return action.to;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
