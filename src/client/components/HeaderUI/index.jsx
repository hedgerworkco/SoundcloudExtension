'use strict';

import React, { Component, PropTypes } from 'react';

class HeaderUI extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <div className='HeaderUI'>
        { this.props.children }
      </div>
    );
  };
}

export default HeaderUI;
