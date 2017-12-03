import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { getProcesses, createAndUpdateProcesses } from '../actions/processAction';

class ProcessSetting extends React.Component {

  componentDidMount() {
    this.props.getProcesses();
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
            0.1,
            200,
            300
          ],
          hiddenColumns: { columns: [0], indicators: false },
          columnSorting: true,
          rowHeaders: true,
          minSpareRows: 1,
          afterChange: (changes, source) => {
            if (changes && source !== 'loadData') {
              const hotTable = this.refs.table.hotInstance;
              const foreignKeyValuePairs = [];
              const foreignKeyValuePair = {company_id: this.props.company[0].id};
              foreignKeyValuePairs.push(foreignKeyValuePair);
              container.props.createAndUpdateProcesses(changes, source, hotTable, foreignKeyValuePairs);
            }
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProcesses, createAndUpdateProcesses
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcessSetting);
