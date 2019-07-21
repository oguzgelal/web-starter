import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Routes from './Routes';

import api from './api';
import { setAuthObserver } from './redux/modules/user';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    api.init();
    setAuthObserver();
  }

  render() {
    return <Routes />;
  }
}

App.propTypes = {
};

export default App;
