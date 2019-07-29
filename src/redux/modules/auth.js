import get from 'lodash/get';
import isNil from 'lodash/isNil';
import api from '../api';
import initialState from '../../config/initialState';
import { requestActions } from './requests';

const SAVE_USER_TO_STATE = 'pim/user/SAVE_USER_TO_STATE';
const REMOVE_USER_FROM_STATE = 'pim/user/REMOVE_USER_FROM_STATE';

const saveUserToState = ({ user }) => ({ type: SAVE_USER_TO_STATE, user });
const removeUserFromState = () => ({ type: REMOVE_USER_FROM_STATE })

const login = ({ email, password }) => dispatch => {
  const loginRequest = () => new Promise((rs, rj) => {
    api.auth.setPersistence(api.authPersistence).then(() => {
      api.auth.signInWithEmailAndPassword(email, password)
        .then(rs).catch(rj)
    }).catch(rj)
  });
  dispatch(requestActions.request(loginRequest, {
    id: 'login',
    onFail: err => dispatch(removeUserFromState())
  }));
}

const logout = () => dispatch => {
  const logoutRequest = () => api.auth.signOut().then(() => {
    dispatch(removeUserFromState())
  });
  dispatch(requestActions.request(logoutRequest, {
    id: 'logout',
  }));
}

const setAuthObserver = () => dispatch => {
  api.auth.onAuthStateChanged(user => {
    console.log('Auth state changed: ', user);
    if (!isNil(user)) {
      dispatch(saveUserToState({
        user: {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoUrl: user.photoUrl,
          uid: user.uid,
        }
      }));
    } else {
      dispatch(removeUserFromState());
    }
  })
}

export const authActions = {
  login,
  logout,
  setAuthObserver,
  saveUserToState,
  removeUserFromState,
}

export default (state = initialState.auth, action = {}) => {

  if (action.type === SAVE_USER_TO_STATE) {
    return { ...state.auth, user: action.user }
  }

  if (action.type === REMOVE_USER_FROM_STATE) {
    return { ...state.auth, user: null }
  }

  return state;
}
