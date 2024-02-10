import list from 'reducers/coursedetailsinfo/coursedetailsinfoListReducers';
import form from 'reducers/coursedetailsinfo/coursedetailsinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
