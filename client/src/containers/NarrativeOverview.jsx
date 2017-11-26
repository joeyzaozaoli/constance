import React from 'react';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

class NarrativeOverview extends React.Component {

  render() {
    return (
      <div>
        <div>{this.props.currentProcess.acronym}</div>
        <div>{this.props.currentProcess.expansion}</div>
        <HotTable root='hot' settings={{
          data: [this.props.currentProcess],
          columns: [{data: 'overview'}],
          colHeaders: ['Overview'],
          colWidths: [1000]
        }} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentProcess: state.process.currentProcess
  };
};

export default connect(mapStateToProps)(NarrativeOverview);
