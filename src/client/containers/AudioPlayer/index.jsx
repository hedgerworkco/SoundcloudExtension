'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { beginFetchMe } from '../../actions/soundcloud.js';
import { AudioPlayerUI } from '../../components';

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
    const { dispatch } = this.props;

    dispatch(beginFetchMe({
      client_id: '',
      oauth_token: ''
    }));
  };

  render() {
    return (
      <AudioPlayerUI>
        <Header/>
        <Navigation/>
        <Library />
        <SearchFilter/>
        <Sidebar/>
      </AudioPlayerUI>
    );
  };
}

export default AudioPlayerContainer;
