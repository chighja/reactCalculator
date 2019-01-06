export const increment = () => ({ type: 'INCREMENT' });

export const incrementBy = n => ({ type: 'INCREMENT_BY', by: n });

export const decrement = () => ({ type: 'DECREMENT' });

export const decrementBy = n => ({ type: 'DECREMENT_BY', by: n });

export const setTo = n => ({ type: 'SET_TO', to: n });
