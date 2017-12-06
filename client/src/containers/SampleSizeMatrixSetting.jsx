import React from 'react';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { fetchSampleSizeMatrix, createAndUpdateSenarios, deleteSenarios } from '../actions/sampleSizeMatrixAction';

class SampleSizeMatrixSetting extends React.Component {

  componentDidMount() {
    this.props.fetchSampleSizeMatrix();
  }

  render() {
    const container = this;

    return (
      <div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.sampleSizeMatrix,
          columns: [
            {data: 'id'},
            {data: 'controlFrequency'},
            {data: 'populationSize'},
            {data: 'sampleSizeLow'},
            {data: 'sampleSizeMedium'},
            {data: 'sampleSizeHigh'}
          ],
          colHeaders: [
            'id',
            'Control Frequency',
            'Assumed Annual Population Size',
            'Low Risk',
            'Medium Risk',
            'High Risk'
          ],
          colWidths: [
            0.1,
            500,
            500,
            500,
            500,
            500
          ],
          hiddenColumns: { columns: [0], indicators: false },
          columnSorting: true,
          minSpareRows: 1,
          contextMenu: ['remove_row'],
          afterChange: (changes, source) => {
            if (changes && source !== 'loadData') {
              const hotTable = this.refs.table.hotInstance;
              const foreignKeyValuePairs = [];
              const foreignKeyValuePair = {company_id: this.props.company[0].id};
              foreignKeyValuePairs.push(foreignKeyValuePair);
              container.props.createAndUpdateSenarios(changes, source, hotTable, foreignKeyValuePairs);
            }
          },
          beforeRemoveRow: (index, amount) => {
            const hotTable = this.refs.table.hotInstance;
            container.props.deleteSenarios(index, amount, hotTable);
          }
        }} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    sampleSizeMatrix: state.sampleSizeMatrix.sampleSizeMatrix
  };
};

export default connect(mapStateToProps, {
  fetchSampleSizeMatrix, createAndUpdateSenarios, deleteSenarios
})(SampleSizeMatrixSetting);

