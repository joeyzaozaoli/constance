import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProcessListEntry from './ProcessListEntry.jsx';
import { getAllProcesses } from '../actions/processesAction';

class ProcessList extends React.Component {

  componentWillMount() {
    this.props.getAllProcesses();
  }

  render() {
    return (
      <div>
        {this.props.processes.map((process) => <ProcessListEntry process={process}/>)}
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
    getAllProcesses: getAllProcesses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessList);
