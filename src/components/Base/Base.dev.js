import React from 'react';
import App from './App';
import DevTools from '../DevTools';

import store from '../../redux/store';

const Base = props => (
  <>
    <DevTools store={store} />
    <App />
  </>
);

Base.propTypes = {
};

export default Base;
