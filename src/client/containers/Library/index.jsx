'use strict';

import React, { Component, PropTypes } from 'react';
import { AudioList } from '../../components';

class Library extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeRow: -1
    }
    this.onRowClick = this.onRowClick.bind(this);
  };

  onRowClick(row, e) {
    if (this.state.activeRow !== row.props.data.id) {
      this.setState({
        activeRow: row.props.data.id
      });
    }
  };

  getRowClassName(rowData) {
    console.log(rowData.id);
    console.log(this.state.activeRow);
    if (rowData.id === this.state.activeRow) {
      return 'active-row';
    } else {
      return 'standard-row';
    }
    console.log('fuck that');
  };

  render() {
    return (
      <AudioList
        tracks={ this.props.tracks }
        columns={['title', 'username', 'created_at']}
        onRowClick={ this.onRowClick }
        getRowClassName={ this.getRowClassName } />
    );
  };
}

export default Library;