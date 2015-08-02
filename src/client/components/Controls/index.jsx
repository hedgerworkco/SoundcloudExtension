'use strict';

import React, { Component } from 'react';
import { PrevButton, PlayButton, NextButton } from 'react-soundplayer/components';

class Controls extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    const { soundCloudAudio } = this.props;
    return (
      <div>
        <PrevButton soundCloudAudio={ soundCloudAudio } />
        <PlayButton soundCloudAudio={ soundCloudAudio } />
        <NextButton soundCloudAudio={ soundCloudAudio } />
      </div>
    );
  };
}

export default Controls;