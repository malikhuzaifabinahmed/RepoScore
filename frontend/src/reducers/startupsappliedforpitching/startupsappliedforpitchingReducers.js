import list from 'reducers/startupsappliedforpitching/startupsappliedforpitchingListReducers';
import form from 'reducers/startupsappliedforpitching/startupsappliedforpitchingFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
