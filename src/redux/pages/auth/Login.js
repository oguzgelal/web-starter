import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styled } from '@material-ui/styles';
import OverlayPage from '../../../components/OverlayPage';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <OverlayPage>
        Hello world
      </OverlayPage>
    );
  }
}

LoginPage.propTypes = {
};

const mapStateToProps = (state, ownProps) => ({
  // authors: state.authors,
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
