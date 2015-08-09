'use strict';

import React, { Component, PropTypes } from 'react';
import Griddle from 'griddle-react';

class AudioList extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <section className='AudioList' style={{ height: 'calc(100vh-50px)'}}>
        <Griddle
          results={ this.props.tracks }
          resultsPerPage={ this.props.tracks.length }
          columns={ this.props.columns }
          columnMetadata={ this.props.columnMetadata }
          showPager={ false }
          onRowClick={ this.props.onRowClick }
          rowMetadata={ this.props.rowMetadata }
          useGriddleStyles={ false } />
      </section>
    );
  };
}

export default AudioList;
