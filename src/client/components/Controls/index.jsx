'use strict';

import React, { Component } from 'react';
import { PrevButton, PlayButton, NextButton } from 'react-soundplayer/components';

class Controls extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <div>
        <PrevButton { ...this.props } />
        <PlayButton { ...this.props } />
        <NextButton { ...this.props } />
      </div>
    );
  };
}

export default Controls;