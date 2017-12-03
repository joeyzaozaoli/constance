import React from 'react';
import { connect } from 'react-redux';

import ProcessListEntry from './ProcessListEntry.jsx';
import { getProcesses } from '../actions/processAction';

class ProcessList extends React.Component {

  componentDidMount() {
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

export default connect(mapStateToProps, {
  getProcesses
})(ProcessList);
