import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Wrapper = styled.div``;

class Routes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        Hello world
      </Wrapper>
    );
  }
}

Routes.propTypes = {
};

export default Routes;
