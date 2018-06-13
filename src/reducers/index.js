import { combineReducers } from 'redux';
import categories from './categories';
import modal from './modal';

const rootReducer = combineReducers({
  categories,
  modal
});

export default rootReducer;
