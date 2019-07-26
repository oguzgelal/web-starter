import get from 'lodash/get';
import api from '../../api';
import initialState from '../../config/initialState';
import { messageActions } from './messages';

const SAVE_USER_TO_STATE = 'pim/user/SAVE_USER_TO_STATE';
const REMOVE_USER_FROM_STATE = 'pim/user/REMOVE_USER_FROM_STATE';

const saveUserToState = ({ user }) => ({ type: SAVE_USER_TO_STATE, user });
const removeUserFromState = () => ({ type: REMOVE_USER_FROM_STATE })

const login = ({ email, password }) => dispatch => {
  api.auth.login({
    email,
    password,
    onFail: err => {
      dispatch(removeUserFromState());
      dispatch(messageActions.register(get(err, 'message', 'Unable to login'), {
        type: 'error'
      }));
    }
  })
}

const setAuthObserver = () => dispatch => {
  api.auth.registerAuthStateObserver(user => {
    if (user) dispatch(saveUserToState({ user }));
    else dispatch(removeUserFromState());
  })
}

export const userActions = {
  login,
  setAuthObserver,
  saveUserToState,
  removeUserFromState,
}

export default (state = initialState.user, action = {}) => {
  switch(action.type) {
    case SAVE_USER_TO_STATE: return action.user;
    case REMOVE_USER_FROM_STATE: return initialState.user;
    default: return state;
  }
}
