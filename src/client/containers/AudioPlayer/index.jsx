'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SoundcloudActions from '../../actions/soundcloud';
import { AudioPlayerUI } from '../../components';

import {
  Header,
  Library,
  Navigation,
  Sidebar
} from '../';

@connect(state => {
  return state;
})
class AudioPlayerContainer extends Component {
  constructor(props, context) {
    super(props, context);
  };

  componentWillMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(SoundcloudActions.initLibrary());
    }
  };

  render() {
    return (
      <AudioPlayerUI>
        <Header streamUrl={ this.props.playTrack } />
        <Navigation />
        <Library
          dispatch={ this.props.dispatch }
          tracks={ this.props.soundcloud.tracks } />
        <Sidebar />
      </AudioPlayerUI>
    );
  };
}

export default AudioPlayerContainer;
