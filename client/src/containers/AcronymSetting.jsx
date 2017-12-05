import React from 'react';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { fetchAcronyms, createAndUpdateAcronyms, deleteAcronyms } from '../actions/acronymAction';

class AcronymSetting extends React.Component {

  componentDidMount() {
    this.props.fetchAcronyms();
  }

  render() {
    const container = this;

    return (
      <div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.acronyms,
          columns: [
            {data: 'id'},
            {data: 'acronym'},
            {data: 'expansion'}
          ],
          colHeaders: [
            'id',
            'Acronym',
            'Expansion'
          ],
          colWidths: [
            0.1,
            80,
            500
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
              container.props.createAndUpdateAcronyms(changes, source, hotTable, foreignKeyValuePairs);
            }
          },
          beforeRemoveRow: (index, amount) => {
            const hotTable = this.refs.table.hotInstance;
            container.props.deleteAcronyms(index, amount, hotTable);
          }
        }} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    acronyms: state.acronym.acronyms
  };
};

export default connect(mapStateToProps, {
  fetchAcronyms, createAndUpdateAcronyms, deleteAcronyms
})(AcronymSetting);
