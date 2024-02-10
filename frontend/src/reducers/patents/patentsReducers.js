import list from 'reducers/patents/patentsListReducers';
import form from 'reducers/patents/patentsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
