import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';
import requests from './requests';
import mode from './mode';

// console.log('auth', auth);
// console.log('mode', mode);
// console.log('requests', requests);
// console.log('messages', messages);

export default combineReducers({
  auth,
  messages,
  requests,
  mode,
});
