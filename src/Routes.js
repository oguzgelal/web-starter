import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { styled } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { userActions } from './redux/modules/user';

const Wrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh'
});

// ${p => p.theme.breakpoints.up('sm')}
const Drawer = styled('nav')({});

const AppContent = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const MainContent = styled('div')({
  flex: 1,
  padding: '48px 36px 0',
  background: '#eaeff1',
});

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
    const errors = Object.values(this.props.errors);
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
              onClick={() => this.props.userActions.login({
                email: this.state.email,
                password: this.state.password,
              })}
            >
              Login
            </Button>
          </MainContent>
        </AppContent>
      </Wrapper>

      <Snackbar
        open={errors.length > 0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
      >
        <SnackbarContent
          variant="error"
          message={get(errors, '[0].message')}
        />
      </Snackbar>
      </>
    );
  }
}

Routes.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
