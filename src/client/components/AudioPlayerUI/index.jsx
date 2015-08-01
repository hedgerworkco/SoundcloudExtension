'use strict';

import React, { Component, PropTypes } from 'react';

class AudioPlayerUI extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <div className='AudioPlayerUI'>
        { this.props.children }
      </div>
    );
  };
}

export default AudioPlayerUI;
