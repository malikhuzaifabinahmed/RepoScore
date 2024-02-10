import list from 'reducers/commities/commitiesListReducers';
import form from 'reducers/commities/commitiesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
