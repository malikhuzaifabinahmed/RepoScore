import list from 'reducers/startupincubation/startupincubationListReducers';
import form from 'reducers/startupincubation/startupincubationFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
