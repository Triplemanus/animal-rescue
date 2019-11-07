import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { animalsReducer } from './animalsReducer';
import { donationsReducer } from './donationsReducer';


export const rootReducer = combineReducers({
  errorMsg,
  isLoading,
  animals: animalsReducer,
  donations: donationsReducer
});