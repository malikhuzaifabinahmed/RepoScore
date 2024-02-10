import list from 'reducers/startupsincubated/startupsincubatedListReducers';
import form from 'reducers/startupsincubated/startupsincubatedFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
