import list from 'reducers/engagementevents/engagementeventsListReducers';
import form from 'reducers/engagementevents/engagementeventsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
