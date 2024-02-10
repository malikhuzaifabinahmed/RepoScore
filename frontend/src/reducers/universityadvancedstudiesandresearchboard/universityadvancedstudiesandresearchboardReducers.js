import list from 'reducers/universityadvancedstudiesandresearchboard/universityadvancedstudiesandresearchboardListReducers';
import form from 'reducers/universityadvancedstudiesandresearchboard/universityadvancedstudiesandresearchboardFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
