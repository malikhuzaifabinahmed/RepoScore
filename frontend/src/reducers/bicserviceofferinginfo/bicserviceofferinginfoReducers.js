import list from 'reducers/bicserviceofferinginfo/bicserviceofferinginfoListReducers';
import form from 'reducers/bicserviceofferinginfo/bicserviceofferinginfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
