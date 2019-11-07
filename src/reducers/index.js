import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { animalsReducer } from './animalsReducer';


export const rootReducer = combineReducers({
  errorMsg,
  isLoading,
  animals: animalsReducer
});