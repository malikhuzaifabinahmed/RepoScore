import list from 'reducers/bicfundinginfo/bicfundinginfoListReducers';
import form from 'reducers/bicfundinginfo/bicfundinginfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
