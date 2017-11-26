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
          columns: [
            {data: 'id'},
            {data: 'overview'}
          ],
          colHeaders: [
            'Id',
            'Overview'
          ],
          colWidths: [
            0.1,
            1000
          ],
          hiddenColumns: { columns: [0], indicators: false }
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
