import list from 'reducers/trainingcourseinfo/trainingcourseinfoListReducers';
import form from 'reducers/trainingcourseinfo/trainingcourseinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
