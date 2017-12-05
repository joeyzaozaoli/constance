import React from 'react';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { fetchControlOwners, createAndUpdateControlOwners } from '../actions/controlOwnerAction';

class ControlOwnerSetting extends React.Component {

  componentDidMount() {
    this.props.fetchControlOwners();
  }

  render() {
    const container = this;

    return (
      <div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.controlOwners,
          columns: [
            {data: 'id'},
            {data: 'title'},
            {data: 'name'}
          ],
          colHeaders: [
            'id',
            'Title',
            'Name'
          ],
          colWidths: [
            0.1,
            400,
            500
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
              container.props.createAndUpdateControlOwners(changes, source, hotTable, foreignKeyValuePairs);
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
    controlOwners: state.controlOwner.controlOwners
  };
};

export default connect(mapStateToProps, {
  fetchControlOwners, createAndUpdateControlOwners
})(ControlOwnerSetting);

