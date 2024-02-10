import list from 'reducers/partnershipinfo/partnershipinfoListReducers';
import form from 'reducers/partnershipinfo/partnershipinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
