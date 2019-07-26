import initialState from '../../config/initialState';

export const REGISTER = 'pim/messages/REGISTER';
export const DISMISS = 'pim/messages/DISMISS';

// action creators
const registerMessage = message => ({ type: REGISTER, message });
const dismiss = id => ({ type: DISMISS, id });

// thunks
const register = (message, options = {}) => dispatch => {

  // generate a random id for the message
  const id = Math.round(Math.random() * 1000000000);

  // save message to the state
  dispatch(registerMessage({
    id,
    message,
    active: true,
    type: 'default',
    ...options
  }));

  // dismiss message with timeout if not sticky
  if (!options.sticky) {
    setTimeout(() => dispatch(dismiss(id)), options.timeout || 3500)
  }
}

export const messageActions = {
  dismiss,
  register,
};

// reducer
export default (state = initialState.messages, action = {}) => {

  if (action.type === REGISTER) {
    return { ...state, [action.message.id]: action.message }
  }

  if (action.type === DISMISS) {
    return { ...state, [action.id]: { ...state[action.id], active: false, } }
  }

  return state;
}
