import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/macro';

import { userActions } from './redux/modules/user';

const Wrapper = styled.div``;

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Wrapper>
        <input
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="email"
        />
        <input
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={() => this.props.userActions.login({
            email: this.state.email,
            password: this.state.password,
          })}
        >
          login
        </button>
      </Wrapper>
    );
  }
}

Routes.propTypes = {
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
)(Routes);
