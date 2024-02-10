import list from 'reducers/policyadvocacy/policyadvocacyListReducers';
import form from 'reducers/policyadvocacy/policyadvocacyFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
