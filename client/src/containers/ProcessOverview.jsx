import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { createAndUpdateProcess } from '../actions/processAction';

class ProcessOverview extends React.Component {

  render() {
    const container = this;

    return (
      <div>
        <div>{this.props.currentProcess.acronym}</div>
        <div>{this.props.currentProcess.expansion}</div>
        <HotTable root='hot' ref='table' settings={{
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
          hiddenColumns: { columns: [0], indicators: false },
          afterChange: (changes, source) => {
            if (changes && source !== 'loadData') {
              const hotTable = this.refs.table;
              container.props.createAndUpdateProcess(changes, source, hotTable);
            }
          }
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createAndUpdateProcess: createAndUpdateProcess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessOverview);
