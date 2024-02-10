import list from 'reducers/university/universityListReducers';
import form from 'reducers/university/universityFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
