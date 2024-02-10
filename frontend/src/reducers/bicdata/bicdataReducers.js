import list from 'reducers/bicdata/bicdataListReducers';
import form from 'reducers/bicdata/bicdataFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
