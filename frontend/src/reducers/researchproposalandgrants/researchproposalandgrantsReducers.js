import list from 'reducers/researchproposalandgrants/researchproposalandgrantsListReducers';
import form from 'reducers/researchproposalandgrants/researchproposalandgrantsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
