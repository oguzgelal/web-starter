import get from 'lodash/get';
import initialState from '../../config/initialState';

const REQUEST_START = 'pim/requests/REQUEST_START';
const REQUEST_STOP = 'pim/requests/REQUEST_STOP';

const startRequest = ({ id }) => ({ type: REQUEST_START, id })
const stopRequest = ({ id }) => ({ type: REQUEST_STOP, id })

const request = (requestFn, options = {}) => (dispatch, getState) => {
  const id = options.id || `request-${Math.round(Math.random() * 1000000000)}`;
  dispatch(startRequest({ id }));
  requestFn()
    .then(res => {
      const state = getState();
      if (get(state, `requests['${id}']`)) {
        dispatch(stopRequest({ id }))
        if (typeof options.onSuccess === 'function') {
          options.onSuccess(res);
        }
      }
    })
    .catch(err => {
      dispatch(stopRequest({ id }))
      if (typeof options.onFail === 'function') {
        options.onFail(err);
      }
    })
}

const cancel = id => dispatch => {
  dispatch(stopRequest({ id }));
}

export const requestActions = {
  request,
  cancel
};

export default (state = initialState.requests, action = {}) => {

  if (action.type === REQUEST_START) {
    return { ...state, [action.id]: true }
  }

  if (action.type === REQUEST_STOP) {
    const newState = {...state};
    newState[action.id] = null;
    delete newState[action.id];
    return newState;
  }

  return state;
}
