import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { createAndUpdateProcesses } from '../actions/processAction';

class ProcessOverview extends React.Component {

  render() {
    const container = this;

    return (
      <div>
        <div>{this.props.process.shortName}</div>
        <div>{this.props.process.name}</div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.process,
          columns: [
            {data: 'id'},
            {data: 'overview'}
          ],
          colHeaders: [
            'id',
            'Overview'
          ],
          colWidths: [
            0.1,
            1000
          ],
          hiddenColumns: { columns: [0], indicators: false },
          afterChange: (changes, source) => {
            if (changes && source !== 'loadData') {
              const hotTable = this.refs.table.hotInstance;
              container.props.createAndUpdateProcesses(changes, source, hotTable);
            }
          }
        }} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    process: state.process.process
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createAndUpdateProcesses: createAndUpdateProcesses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessOverview);
