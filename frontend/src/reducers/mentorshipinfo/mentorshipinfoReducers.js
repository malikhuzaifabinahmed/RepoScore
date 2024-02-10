import list from 'reducers/mentorshipinfo/mentorshipinfoListReducers';
import form from 'reducers/mentorshipinfo/mentorshipinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
