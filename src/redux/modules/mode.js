import initialState from '../../config/initialState';

const CHANGE_MODE = 'pim/mode/CHANGE_MODE';

// action creators
const changeMode = () => ({ type: CHANGE_MODE });
export const modeActions = { changeMode }

// reducers
export default (state = initialState.mode, action = {}) => {
  switch(action.type) {
    case CHANGE_MODE: return state === 'light' ? 'dark' : 'light';
    default: return state;
  }
}
