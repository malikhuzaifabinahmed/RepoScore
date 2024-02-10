import list from 'reducers/oricdata/oricdataListReducers';
import form from 'reducers/oricdata/oricdataFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
