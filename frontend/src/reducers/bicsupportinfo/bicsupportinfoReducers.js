import list from 'reducers/bicsupportinfo/bicsupportinfoListReducers';
import form from 'reducers/bicsupportinfo/bicsupportinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
