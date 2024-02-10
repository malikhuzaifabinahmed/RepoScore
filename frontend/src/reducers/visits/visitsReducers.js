import list from 'reducers/visits/visitsListReducers';
import form from 'reducers/visits/visitsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
