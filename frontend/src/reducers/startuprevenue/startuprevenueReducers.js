import list from 'reducers/startuprevenue/startuprevenueListReducers';
import form from 'reducers/startuprevenue/startuprevenueFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
