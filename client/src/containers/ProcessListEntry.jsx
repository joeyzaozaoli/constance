import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getCurrentProcess } from '../actions/processAction';

class ProcessListEntry extends React.Component {

  render() {
    return (
      <button onClick={() => {this.props.getCurrentProcess(this.props.process);}}>
        {this.props.process.acronym}
      </button>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCurrentProcess: getCurrentProcess
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(ProcessListEntry);
