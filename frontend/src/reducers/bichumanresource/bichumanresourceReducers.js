import list from 'reducers/bichumanresource/bichumanresourceListReducers';
import form from 'reducers/bichumanresource/bichumanresourceFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
