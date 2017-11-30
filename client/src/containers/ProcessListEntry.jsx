import React from 'react';
import { bindActionCreators } from 'redux';
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProcess: getProcess
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProcessListEntry);
