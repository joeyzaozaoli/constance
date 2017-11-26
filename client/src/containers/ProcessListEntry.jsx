import React from 'react';

export default class ProcessListEntry extends React.Component {

  render() {
    return (
      <button>{this.props.acronym}</button>
    );
  }

}
