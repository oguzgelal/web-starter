import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import { styled } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SnackbarMessages from './containers/SnackbarMessages';

import { userActions } from './redux/modules/user';
import { modeActions } from './redux/modules/mode';

const Wrapper = styled('div')(p => ({
  display: 'flex',
  minHeight: '100vh',
}));

// ${p => p.theme.breakpoints.up('sm')}
const Drawer = styled('nav')({});

const AppContent = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const MainContent = styled('div')(p => ({
  flex: 1,
  padding: '48px 36px 0',
}));

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mobile: false,
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <>
      <Wrapper>
        <Drawer>
          {/* <Sidebar /> */}
        </Drawer>
        <AppContent>
          {/* <Header /> */}
          <MainContent>
            <TextField
              label="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <TextField
              label="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button
              variant="text"
              color="primary"
              disabled={get(this.props, 'requests.login')}
              onClick={() => this.props.userActions.login({
                email: this.state.email,
                password: this.state.password,
              })}
            >
              Login
            </Button>
            <Button
              variant="text"
              color="secondary"
              onClick={() => this.props.modeActions.changeMode()}
            >
              Toggle Mode
            </Button>
          </MainContent>
        </AppContent>
      </Wrapper>
      <SnackbarMessages />
      </>
    );
  }
}

Routes.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  requests: state.requests,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
  modeActions: bindActionCreators(modeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
