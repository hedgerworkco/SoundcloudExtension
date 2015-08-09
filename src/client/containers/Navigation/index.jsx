'use strict';

import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, NavItemLink } from 'react-boostrap';

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <div>
        <ul>
          <li>My Library</li>
          <li>Playlists</li>
        </ul>
      </div>
    );
  };
}

export default Navigation;