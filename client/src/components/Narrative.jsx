import React from 'react';

import ProcessList from '../containers/ProcessList.jsx';
import ProcessOverview from '../containers/ProcessOverview.jsx';

class Narrative extends React.Component {

  render() {
    return (
      <div>
        <ProcessList />
        <ProcessOverview />
      </div>
    );
  }

}

export default Narrative;
