import list from 'reducers/startupemploment/startupemplomentListReducers';
import form from 'reducers/startupemploment/startupemplomentFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
