import list from 'reducers/startupmentoring/startupmentoringListReducers';
import form from 'reducers/startupmentoring/startupmentoringFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
