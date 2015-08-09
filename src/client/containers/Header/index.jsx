'use strict';

import React, { Component, PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Display, SearchFilter } from '../';
import { HeaderUI, Controls } from '../../components/index';
import { PrevButton, PlayButton, NextButton, Cover } from 'react-soundplayer/components';

class Header extends Component {
  render() {
    return (
      <HeaderUI>
      <SoundPlayerContainer
        streamUrl={ this.props.streamUrl }
        clientId="b5212346575f640b97566512faeb856d">
        <Cover
          trackName={ this.props.track.name }
          artistName={ this.props.track.artist }
          >
          <Controls/>
          <Display/>
          <SearchFilter/>
        </Cover>
      </SoundPlayerContainer>
      </HeaderUI>
    );
  };
}

Header.defaultProps = {
  streamUrl: null,
  track: [{
    name: '',
    artist: ''
  }]
};

export default Header;
