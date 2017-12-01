import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HotTable from 'react-handsontable';

import { getCompany, updateCompany } from '../actions/companyAction';

class CompanySetting extends React.Component {

  componentWillMount() {
    this.props.getCompany();
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCompany: getCompany,
    updateCompany: updateCompany
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanySetting);
