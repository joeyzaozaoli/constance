import React from 'react';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { fetchProcesses, createAndUpdateProcesses, deleteProcesses } from '../actions/processAction';

class ProcessSetting extends React.Component {

  componentDidMount() {
    this.props.fetchProcesses();
  }

  render() {
    const container = this;

    return (
      <div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.processes,
          columns: [
            {data: 'id'},
            {data: 'shortName'},
            {data: 'name'}
          ],
          colHeaders: [
            'id',
            'Process abbrev',
            'Short for'
          ],
          colWidths: [
            50,
            200,
            300
          ],
          hiddenColumns: { columns: [0], indicators: false },
          columnSorting: true,
          rowHeaders: true,
          minSpareRows: 1,
          contextMenu: ['remove_row'],
          afterChange: (changes, source) => {
            if (changes && source !== 'loadData') {
              const hotTable = this.refs.table.hotInstance;
              const foreignKeyValuePairs = [];
              const foreignKeyValuePair = {company_id: this.props.company[0].id};
              foreignKeyValuePairs.push(foreignKeyValuePair);
              container.props.createAndUpdateProcesses(changes, source, hotTable, foreignKeyValuePairs);
            }
          },
          beforeRemoveRow: (index, amount) => {
            const hotTable = this.refs.table.hotInstance;
            container.props.deleteProcesses(index, amount, hotTable);
          }
        }} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    processes: state.process.processes
  };
};

export default connect(mapStateToProps, {
  fetchProcesses, createAndUpdateProcesses, deleteProcesses
})(ProcessSetting);
