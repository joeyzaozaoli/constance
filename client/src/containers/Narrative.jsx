import React from 'react';
import { connect } from 'react-redux';

class Narrative extends React.Component {

  render() {
    return (
      <div>
        <div>{this.props.currentProcess.acronym}</div>
        <div>{this.props.currentProcess.expansion}</div>
        <div>{this.props.currentProcess.overview}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    currentProcess: state.process.currentProcess
  };
};

export default connect(mapStateToProps)(Narrative);
