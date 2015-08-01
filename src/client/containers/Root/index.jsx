'use strict';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger, thunk } from '../../middleware';
import promiseMiddleware from '../../middleware/promiseMiddleware';

import AudioPlayerContainer from '../AudioPlayer';
import { fetchMe } from '../../reducers/soundcloud';

const combinedReducers = combineReducers({fetchMe});
const createFinalStore = compose(applyMiddleware(thunk), applyMiddleware(promiseMiddleware), createStore);
const store = createFinalStore(combinedReducers);

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        { () => <AudioPlayerContainer/> }
      </Provider>
    );
  };
}

export default Root;

React.render(<Root/>, document.getElementById('ui-App'));