import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/styles';
import get from 'lodash/get';

import Routes from './Routes';

import api from './redux/api';
import getTheme from './styles/getTheme';
import { authActions } from './redux/modules/auth';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    api.init();
    this.props.authActions.setAuthObserver();
  }

  // re-render only if mode changes to
  // avoid recreating theme on the run time
  shouldComponentUpdate(nextProps) {
    return get(this.props, 'mode') !== get(nextProps, 'mode');
  }

  render() {
    const theme = getTheme({ mode: this.props.mode });
    console.log('theme: ', theme);

    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <>
            <CssBaseline />
            <Routes />
          </>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

App.propTypes = {
  theme: PropTypes.string,
  authActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  mode: state.mode,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
