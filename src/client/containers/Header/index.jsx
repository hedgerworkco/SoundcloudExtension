'use strict';

import React, { Component, PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { Display, SearchFilter } from '../';
import { HeaderUI, Controls } from '../../components/index';

class Header extends Component {
  render() {
    return (
      <HeaderUI>
        <Controls/>
        <Display/>
        <SearchFilter/>
      </HeaderUI>
    );
  };
}

export default Header;
