import { createReducer } from '../../util/reducerUtil';

const initialState = [];

export const testEvent = (state, payload) => {
  return "hello";
};

export default createReducer(initialState, {
  ['TEST']: testEvent
});