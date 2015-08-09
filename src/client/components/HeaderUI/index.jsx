'use strict';

import React, { Component, PropTypes } from 'react';
import { cloneWithProps } from 'react/addons';
import classNames from 'classnames';

class HeaderUI extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false
    };
    this.wrapChild = this.wrapChild.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  wrapChild(child) {
    return React.cloneElement(child, this.props);
  };

  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    const { children, playing } = this.props;

    if (!children) {
      return null;
    }

    const headerClasses = classNames({
      'HeaderUI': true,
      'is-open': true
    });

    return (
      <div className={ headerClasses } onClick={ this.handleClick } style={{ height: this.state.isOpen ? '260px' : '50px', border: this.state.isOpen ? '0' : '1px solid #555', backgroundColor: this.state.isOpen ? 'rgba(0,0,0,0.3)' : '#fff', transition: 'all 0.5s cubic-bezier(.69,.25,0,1)'}}>
        { Array.isArray(children) ?
            React.Children.map(children, this.wrapChild)
            : this.wrapChild(children) }
      </div>
    );
  };
}

export default HeaderUI;
