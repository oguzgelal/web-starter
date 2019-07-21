import initialState from '../../config/initialState';

export const REGISTER_ERROR = 'pim/user/REGISTER_ERROR';

export const errorActions = {
  register: error => ({ type: REGISTER_ERROR, error }),
}

// register an error
export const register = (message, options = {}) => dispatch => {
  // generate a random id for the error
  const id = Math.round(Math.random() * 1000000000);
  // save error to the state
  dispatch(errorActions.register({ id, message, ...options}))
}

export default (state = initialState.errors, action = {}) => {

  if (action.type === REGISTER_ERROR) {
    return { ...state, [action.error.id]: action.error }
  }

  return state;
}
