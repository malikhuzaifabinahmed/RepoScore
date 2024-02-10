import list from 'reducers/researchpolicy/researchpolicyListReducers';
import form from 'reducers/researchpolicy/researchpolicyFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
