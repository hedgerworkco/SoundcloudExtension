'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'redux/react';
import { SoundcloudActions } from '../../actions';

import { 
  Header,
  Library,
  Navigation,
  SearchFilter,
  Sidebar 
} from '../';

@connect(state => (state))
class AudioPlayerContainer extends Component {
  constructor(props, context) {
    super(props, context);
  };

  componentWillMount() {
    SoundcloudActions.fetchMe({
      client_id: '',
      oauth_token: ''
    });
  };

  render() {
    return (
      <AudioPlayer>
        <Header/>
        <Library/>
        <Navigation/>
        <SearchFilter/>
        <Sidebar/>
      </AudioPlayer>
    );
  };
}

export default AudioPlayerContainer;
