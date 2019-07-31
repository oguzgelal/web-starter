import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import get from 'lodash/get';

const Wrapper = styled('div')(p => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: get(p, 'theme.zIndex.overlayPage'),
  backgroundColor: get(p, 'theme.palette.background.default'),
  ...(!p.center ? {} : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
}));


const Wave = styled('div')(p => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: get(p, 'theme.zIndex.overlayPage') + 10,
  height: '40vh',
  width: '100vw',
  overflow: 'hidden',
  '& svg' : {
    width: '100%',
    height: '100%',
    '& path' : {
      stroke: 'none',
      fill: get(p, 'theme.palette.background.paper'),
    }
  }
}))

const Children = styled('div')(p => ({
  zIndex: get(p, 'theme.zIndex.overlayPage') + 20,
}))


const OverlayPage = ({ children, ...props } = {}) => (
  <Wrapper {...props}>
    {props.wave && (
      <Wave>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
        </svg>
      </Wave>
    )}
    <Children>
      {children}
    </Children>
  </Wrapper>
);

OverlayPage.propTypes = {
  center: PropTypes.bool, // center contents
  wave: PropTypes.bool, // render wave
  children: PropTypes.any,
};

OverlayPage.defaultProps = {
  center: true,
  wave: true,
}

export default OverlayPage;
