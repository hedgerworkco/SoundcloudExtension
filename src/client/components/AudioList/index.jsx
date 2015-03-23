'use strict';

import React from 'react';
import Griddle from 'griddle-react';

class AudioList extends Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <section className='AudioList'>
        <Griddle 
          results={ this.props.tracks } 
          resultsPerPage={ this.props.tracks.length }
          columns={ this.props.columns } 
          showPager={ false } />
      </section>
    );
  };
}

export default AudioList;