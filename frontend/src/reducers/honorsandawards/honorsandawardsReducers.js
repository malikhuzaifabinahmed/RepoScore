import list from 'reducers/honorsandawards/honorsandawardsListReducers';
import form from 'reducers/honorsandawards/honorsandawardsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
