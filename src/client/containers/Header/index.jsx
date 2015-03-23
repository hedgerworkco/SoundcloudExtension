'use strict';

import React, { Component, PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Controls, Display } from '../';

class Header extends Component {
  render() {
    return (
      <SoundPlayerContainer { ...opts }>
        <Controls/>
        <Display/>
      </SoundPlayerContainer>
    );
  };
}

export default Header;
