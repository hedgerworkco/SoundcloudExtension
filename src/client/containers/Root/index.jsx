'use strict';

import React, { Component, PropTypes } from 'react';
import { Provider } from 'redux/react';
import { createDispatcher, createRedux, composeStores } from 'redux';
import { loggerMiddleware, thunkMiddleware } from '../../middleware';
import { AudioPlayerContainer } from '../';
import reducers from '../../reducers/soundcloud';

const dispatcher = createDispatcher(
  composeStores(reducers),
  getState => [ thunkMiddleware(getState), loggerMiddleware ]
);
const redux = createRedux(dispatcher);

class Root extends Component {
  render() {
    return (
      <Provider redux={redux}>
        { () => <AudioPlayerContainer/> }
      </Provider>
    );
  };
}

export default Root;

React.render(<Root/>, document.getElementById('ui-App'));