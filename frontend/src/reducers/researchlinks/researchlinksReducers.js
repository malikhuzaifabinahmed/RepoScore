import list from 'reducers/researchlinks/researchlinksListReducers';
import form from 'reducers/researchlinks/researchlinksFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
