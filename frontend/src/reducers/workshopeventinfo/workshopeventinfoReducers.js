import list from 'reducers/workshopeventinfo/workshopeventinfoListReducers';
import form from 'reducers/workshopeventinfo/workshopeventinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
