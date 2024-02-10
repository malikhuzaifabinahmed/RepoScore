import list from 'reducers/anualresearchrevenue/anualresearchrevenueListReducers';
import form from 'reducers/anualresearchrevenue/anualresearchrevenueFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
