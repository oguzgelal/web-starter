import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styled } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import get from 'lodash/get';

import { messageActions } from '../../redux/modules/messages';

import Snackbar from '../../components/Snackbar';

class Messages extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {

    const messages = Object
      .values(this.props.messages)
      .filter(m => m.active)

    const displayMessage = messages[0];

    return (
      <Snackbar
        open={!!displayMessage}
        variant={get(displayMessage, 'type')}
        message={get(displayMessage, 'message')}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            onClick={() => messageActions.dismiss(get(displayMessage, 'id'))}
          >
            <Icon>close</Icon>
          </IconButton>
        ]}
      />
    );
  }
}

Messages.propTypes = {
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
)(Messages);
