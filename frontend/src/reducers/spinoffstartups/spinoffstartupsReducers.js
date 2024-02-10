import list from 'reducers/spinoffstartups/spinoffstartupsListReducers';
import form from 'reducers/spinoffstartups/spinoffstartupsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
