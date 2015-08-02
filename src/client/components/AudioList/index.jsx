'use strict';

import React, { Component, PropTypes } from 'react';
import Griddle from 'griddle-react';

class AudioList extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    const rowMetaData = {
      'bodyCssClassName': this.props.getBodyRowClassName
    };

    return (
      <section className='AudioList'>
        <Griddle
          results={ this.props.tracks }
          resultsPerPage={ this.props.tracks.length }
          columns={ this.props.columns }
          showPager={ false }
          onRowClick={ this.props.onRowClick }
          rowMetaData={ rowMetaData } />
      </section>
    );
  };
}

export default AudioList;
