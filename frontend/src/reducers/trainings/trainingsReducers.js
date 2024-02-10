import list from 'reducers/trainings/trainingsListReducers';
import form from 'reducers/trainings/trainingsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
