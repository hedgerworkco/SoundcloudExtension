'use strict';

import React, { Component, PropTypes } from 'react';
import { AudioList } from '../../components';

class Library extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <AudioList/>
    );
  };
}

export default Library;