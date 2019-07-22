import { combineReducers } from 'redux';
import user from './user';
import errors from './errors';
import requests from './requests';

export default combineReducers({
  user,
  errors,
  requests,
});
