import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import Routes from './Routes';

import firebase from '../../firebase';
import store from '../../redux/store';
import style from '../../config/style';


class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    firebase.init();
  }

  render() {
    return (
      <ThemeProvider theme={style}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
};

export default App;
