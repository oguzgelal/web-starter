import get from 'lodash/get';
import initialState from '../../config/initialState';

export const REGISTER = 'pim/user/REGISTER';
export const DISMISS = 'pim/user/DISMISS';

const registerError = error => ({ type: REGISTER, error });
const dismiss = id => ({ type: DISMISS, id });

const register = (message, options = {}) => dispatch => {

  // generate a random id for the error
  const id = Math.round(Math.random() * 1000000000);

  // save error to the state
  dispatch(registerError({ id, message, ...options}));

  // dismiss error with timeout if not sticky
  if (!options.sticky) {
    setTimeout(() => dispatch(dismiss(id)), options.timeout || 3500)
  }
}

export const errorActions = {
  dismiss,
  register,
};

// reducer
export default (state = initialState.errors, action = {}) => {

  if (action.type === REGISTER) {
    return { ...state, [action.error.id]: action.error }
  }

  if (action.type === DISMISS) {
    const newState = {...state};
    newState[action.id] = null;
    delete newState[action.id];
    return newState;
  }

  return state;
}
