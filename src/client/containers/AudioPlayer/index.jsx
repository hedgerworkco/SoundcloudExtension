'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMe, initLibrary } from '../../actions/soundcloud.js';
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

    dispatch(initLibrary());
  };

  componentDidUpdate() {
    console.log(this.props);
  };

  render() {
    return (
      <AudioPlayerUI>
        <Header />
        <Navigation />
        <Library
          tracks={ this.props.fetchLikes } />
        <Sidebar />
      </AudioPlayerUI>
    );
  };
}

export default AudioPlayerContainer;
