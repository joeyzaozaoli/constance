import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProcessListEntry from './ProcessListEntry.jsx';
import { getProcesses } from '../actions/processAction';

class ProcessList extends React.Component {

  componentWillMount() {
    this.props.getProcesses();
  }

  render() {
    return (
      <div>
        {this.props.processes.map((process) => <ProcessListEntry process={process} key={process.id}/>)}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    processes: state.process.processes
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProcesses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessList);
