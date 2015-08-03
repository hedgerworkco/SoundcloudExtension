'use strict';

import React, { Component, PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Display, SearchFilter } from '../';
import { HeaderUI, Controls } from '../../components/index';
import { PrevButton, PlayButton, NextButton } from 'react-soundplayer/components';

class Header extends Component {
  render() {
    console.log('streamUrl', this.props.streamUrl);
    return (
      <HeaderUI>
        <SoundPlayerContainer streamUrl={ this.props.streamUrl } clientId='b5212346575f640b97566512faeb856d'>
          <Controls/>
          <Display/>
        </SoundPlayerContainer>
        <SearchFilter/>
      </HeaderUI>
    );
  };
}


Header.defaultProps = {
  streamUrl: null
};

export default Header;
