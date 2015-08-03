'use strict';

import React, { Component } from 'react';
import { PrevButton, PlayButton, NextButton } from 'react-soundplayer/components';

class Controls extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    console.log('thisprops');
    console.log(this.props);
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