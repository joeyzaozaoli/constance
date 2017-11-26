import React from 'react';

import ProcessList from '../containers/ProcessList.jsx';
import NarrativeOverview from '../containers/NarrativeOverview.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ProcessList />
        <NarrativeOverview />
      </div>
    );
  }

}
