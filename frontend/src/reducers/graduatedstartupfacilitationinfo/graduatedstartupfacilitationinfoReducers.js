import list from 'reducers/graduatedstartupfacilitationinfo/graduatedstartupfacilitationinfoListReducers';
import form from 'reducers/graduatedstartupfacilitationinfo/graduatedstartupfacilitationinfoFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
