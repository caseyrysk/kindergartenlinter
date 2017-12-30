import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import storySaving from './storySavingReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  storySaving,
  routing: routerReducer
});

export default rootReducer;
