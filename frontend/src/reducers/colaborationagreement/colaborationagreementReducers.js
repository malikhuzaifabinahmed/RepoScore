import list from 'reducers/colaborationagreement/colaborationagreementListReducers';
import form from 'reducers/colaborationagreement/colaborationagreementFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
