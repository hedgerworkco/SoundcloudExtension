'use strict';

import React, { Component, PropTypes } from 'react';
import { AudioList } from '../../components';
import { playTrack } from '../../actions/soundcloud';

class Library extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeRow: -1
    }

    // this.onRowClick = this.onRowClick.bind(this);
    this.getRowClassName = this.getRowClassName.bind(this);

    this.columnMetadata = [
      {
        'columnName': 'title',
        'displayName': 'Name',
        'order': 1
      },
      {
        'columnName': 'mb_username',
        'displayName': 'Artist',
        'order': 2
      },
      {
        'columnName': 'username',
        'displayName': 'User',
        'order': 3
      },
      {
        'columnName': 'favorite_index',
        'displayName': 'Date Added',
        'order': 4
      },
      {
        'columnName': 'created_at',
        'displayName': 'Date Created',
        'order': 5
      }
    ];

    this.rowMetadata = {
      'bodyCssClassName': this.getRowClassName
    };
  };

  onRowClick = (row, e) => {
    const { dispatch } = this.props;
    const streamUrl = row.props.data.stream_url;

    if (streamUrl) {
      dispatch(playTrack(streamUrl));
    }

    if (this.state.activeRow !== row.props.data.id) {
      this.setState({
        activeRow: row.props.data.id
      });
    }
  };

  getRowClassName(rowData) {
    console.log(rowData);
    if (rowData.id === this.state.activeRow) {
      return 'active-row';
    } else {
      return 'standard-row';
    }
  };

  render() {
    return (
      <AudioList
        tracks={ this.props.tracks }
        columns={['title', 'mb_username', 'username', 'favorite_index', 'created_at']}
        onRowClick={ this.onRowClick }
        getRowClassName={ this.getRowClassName }
        columnMetadata={ this.columnMetadata }
        rowMetadata={ this.rowMetadata }/>
    );
  };
}

export default Library;