import get from 'lodash/get';
import api from '../../api';
import initialState from '../../config/initialState';
import { register } from './errors';

const SAVE_USER_TO_STATE = 'pim/user/SAVE_USER_TO_STATE';
const REMOVE_USER_FROM_STATE = 'pim/user/REMOVE_USER_FROM_STATE';

export const userActions = {
  saveUserToState: ({ user }) => ({ type: SAVE_USER_TO_STATE, user }),
  removeUserFromState: () => ({ type: REMOVE_USER_FROM_STATE }),
}

export const login = ({ email, password }) => dispatch => {
  api.login({
    email,
    password,
    onFail: err => {
      dispatch(userActions.removeUserFromState());
      register(get(err, 'message') || 'Unable to login')
    }
  })
}

export const setAuthObserver = () => dispatch => {
  api.registerAuthStateObserver(user => {
    if (user) dispatch(userActions.saveUserToState({ user }))
    else dispatch(userActions.removeUserFromState());
  })
}

export default (state = initialState.user, action = {}) => {
  switch(action.type) {
    case SAVE_USER_TO_STATE: return action.user;
    case REMOVE_USER_FROM_STATE: return null;
    default: return state;
  }
}
