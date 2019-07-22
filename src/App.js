import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Routes from './Routes';

import api from './api';
import { userActions } from './redux/modules/user';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    api.init();
    this.props.userActions.setAuthObserver();
  }

  render() {
    return <Routes />;
  }
}

App.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  // authors: state.authors
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
