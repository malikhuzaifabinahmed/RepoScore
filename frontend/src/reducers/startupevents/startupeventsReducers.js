import list from 'reducers/startupevents/startupeventsListReducers';
import form from 'reducers/startupevents/startupeventsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
