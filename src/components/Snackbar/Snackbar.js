import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiSnackbarContent from '@material-ui/core/SnackbarContent';
import Icon from '@material-ui/core/Icon';

import get from 'lodash/get';

const Wrapper = styled(MuiSnackbar)(p => ({}));

const Contents = styled(MuiSnackbarContent)(p => ({
  color: 'white',
  backgroundColor: get(p, `theme.palette['${p.variant}'].main`),
}));

const MessageContents = styled('span')(p => ({
  display: 'flex',
  alignItems: 'center',
}));

const DisplayIcon = styled(Icon)(p => ({
  fontSize: p.theme.fontSize,
  marginRight: p.theme.spacing(1),
}))

const Snackbar = props => {
  const {action, ...rest} = props

  return (
    <Wrapper
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      {...rest}
    >
      <Contents
        message={(
          <MessageContents>
            <DisplayIcon color="white">
              {!!props.icon && props.icon}
              {!props.icon && props.variant === 'error' && 'error'}
              {!props.icon && props.variant === 'warning' && 'warning'}
              {!props.icon && props.variant === 'info' && 'info'}
              {!props.icon && props.variant === 'success' && 'check'}
            </DisplayIcon>
            {props.message}
          </MessageContents>
        )}
        action={action}
      />
    </Wrapper>
  )
};

Snackbar.propTypes = {
  icon: PropTypes.any,
  variant: PropTypes.oneOf([
    'default',
    'success',
    'warning',
    'info',
    'error'
  ])
};

export default Snackbar;