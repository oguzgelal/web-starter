import initialState from '../../config/initialState';

export const REGISTER = 'pim/messages/REGISTER';
export const DISMISS = 'pim/messages/DISMISS';

// action creators
const registerMessage = message => ({ type: REGISTER, message });
const dismiss = id => ({ type: DISMISS, id });

// thunks
const register = (message, options = {}) => dispatch => {
  dispatch(registerMessage({
    message,
    type: 'default',
    id: Math.round(Math.random() * 1000000000),
    ...options
  }));
}

export const messageActions = {
  dismiss,
  register,
};

// reducer
export default (state = initialState.messages, action = {}) => {

  if (action.type === REGISTER) {
    return [ action.message, ...state ]
  }

  if (action.type === DISMISS) {
    const newState = [...state];
    const messageIndex = state.map(m => m.id).indexOf(action.id);
    if (messageIndex !== -1) newState.splice(messageIndex, 1);
    return newState;
  }

  return state;
}
