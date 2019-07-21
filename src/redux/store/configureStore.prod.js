import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from '../../config/initialState';
import rootReducer from './rootReducer';

export default () => createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);
