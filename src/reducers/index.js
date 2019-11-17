import { defaultReducer } from './defaultReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  defaultState: defaultReducer
});