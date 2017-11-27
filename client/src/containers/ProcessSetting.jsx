import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { getAllProcesses, createAndUpdateProcess } from '../actions/processAction';

class ProcessSetting extends React.Component {

  componentWillMount() {
    this.props.getAllProcesses();
  }

  render() {
    const container = this;

    return (
      <div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.processes,
          columns: [
            {data: 'id'},
            {data: 'acronym'},
            {data: 'expansion'}
          ],
          colHeaders: [
            'Id',
            'Acronym',
            'Expansion'
          ],
          colWidths: [
            0.1,
            50,
            100
          ],
          hiddenColumns: { columns: [0], indicators: false },
          columnSorting: true,
          rowHeaders: true,
          minSpareRows: 1,
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
    processes: state.process.processes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllProcesses: getAllProcesses,
    createAndUpdateProcess: createAndUpdateProcess
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessSetting);
