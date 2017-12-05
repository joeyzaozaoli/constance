import React from 'react';
import { connect } from 'react-redux';

import { fetchProcess } from '../actions/processAction';

class ProcessListEntry extends React.Component {

  render() {
    return (
      <button onClick={() => {this.props.fetchProcess(this.props.process);}}>
        {this.props.process.shortName}
      </button>
    );
  }

}

export default connect(null, {
  fetchProcess
})(ProcessListEntry);
