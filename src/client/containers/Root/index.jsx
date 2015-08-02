'use strict';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from '../../middleware';
import thunk from 'redux-thunk';
import promiseMiddleware from '../../middleware/promiseMiddleware';

import AudioPlayerContainer from '../AudioPlayer';
import { fetchMe, fetchLikes } from '../../reducers/soundcloud';

const combinedReducers = combineReducers({fetchMe, fetchLikes});
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