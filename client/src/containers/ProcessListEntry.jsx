import React from 'react';
import { connect } from 'react-redux';

import { getProcess } from '../actions/processAction';

class ProcessListEntry extends React.Component {

  render() {
    return (
      <button onClick={() => {this.props.getProcess(this.props.process);}}>
        {this.props.process.shortName}
      </button>
    );
  }

}

export default connect(null, {
  getProcess
})(ProcessListEntry);
