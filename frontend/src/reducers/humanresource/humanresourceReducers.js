import list from 'reducers/humanresource/humanresourceListReducers';
import form from 'reducers/humanresource/humanresourceFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
