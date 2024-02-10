import list from 'reducers/activegraduatedstartupinfo/activegraduatedstartupinfoListReducers';
import form from 'reducers/activegraduatedstartupinfo/activegraduatedstartupinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
