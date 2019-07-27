import { combineReducers } from 'redux';
import user from './user';
import messages from './messages';
import requests from './requests';
import mode from './mode';

export default combineReducers({
  user,
  messages,
  requests,
  mode,
});
