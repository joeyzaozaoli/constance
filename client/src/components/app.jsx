import React from 'react';

import ProcessList from '../containers/ProcessList.jsx';
import Narrative from '../containers/Narrative.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ProcessList />
        <Narrative />
      </div>
    );
  }

}
