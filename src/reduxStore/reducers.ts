import { combineReducers } from 'redux';
import designs from '../designs/reducer';

const reducers = {
  designs,
};

export default combineReducers(reducers);
