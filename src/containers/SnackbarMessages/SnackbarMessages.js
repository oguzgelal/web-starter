import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styled, withTheme } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import get from 'lodash/get';

import { messageActions } from '../../redux/modules/messages';

import Snackbar from '../../components/Snackbar';

class Messages extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      displayMessage: null
    };

    this.setMessage = this.setMessage.bind(this);
    this.dismissMessage = this.dismissMessage.bind(this);
  }

  componentDidUpdate(prevProps) {
    const oldMessage = get(prevProps, 'messages[0].id');
    const newMessage = get(this.props, 'messages[0].id');
    if (newMessage !== oldMessage) {
      this.setMessage();
    }
  }

  setMessage() {
    const displayMessage = get(this.props, 'messages[0]');
    if (displayMessage && !this.state.displayMessage && !this.state.open) {
      this.setState({ open: true, displayMessage })
    }
  }

  dismissMessage(id) {
    const t = get(this.props, 'theme.transitions.duration.leavingScreen');
    this.setState({ open: false }, () => {
      this.props.messageActions.dismiss(id);
      setTimeout(() => {
        this.setState({ displayMessage: null }, () => {
          this.setMessage();
        })
      }, t)
    })
  }

  render() {
    const { open, displayMessage } = this.state;
    return (
      <Snackbar
        key={get(displayMessage, 'id')}
        open={open}
        autoHideDuration={!get(displayMessage, 'sticky') ?
          get(displayMessage, 'duration') || 3000 :
          null
        }
        onClose={(e, reason) => {
          if (reason === 'timeout') {
            this.dismissMessage(get(displayMessage, 'id'))
          }
        }}
        variant={get(displayMessage, 'type')}
        message={get(displayMessage, 'message')}
        action={!get(displayMessage, 'dismiss') ? null : [
          <IconButton
            key="close"
            aria-label="close"
            onClick={() => this.dismissMessage(get(displayMessage, 'id'))}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    );
  }
}

Messages.propTypes = {
  theme: PropTypes.object,
  messages: PropTypes.array,
  messageActions: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  messageActions: bindActionCreators(messageActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Messages));
