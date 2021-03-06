import React from 'react';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { fetchCompany, updateCompany } from '../actions/companyAction';

class CompanySetting extends React.Component {

  componentDidMount() {
    this.props.fetchCompany();
  }

  render() {
    const container = this;

    return (
      <div>
        <HotTable root='hot' ref='table' settings={{
          data: this.props.company,
          columns: [
            {data: 'id'},
            {data: 'name'}
          ],
          colHeaders: [
            'id',
            'Company'
          ],
          colWidths: [
            0.1,
            200
          ],
          hiddenColumns: { columns: [0], indicators: false },
          afterChange: (changes, source) => {
            if (changes && source !== 'loadData') {
              const hotTable = this.refs.table.hotInstance;
              container.props.updateCompany(changes, source, hotTable);
            }
          }
        }} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    company: state.company
  };
};

export default connect(mapStateToProps, {
  fetchCompany, updateCompany
})(CompanySetting);

