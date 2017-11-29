import React from 'react';

import CompanySetting from '../containers/CompanySetting.jsx';
import ProcessSetting from '../containers/ProcessSetting.jsx';

class Setting extends React.Component {

  render() {
    return (
      <div>
        <CompanySetting />
        <ProcessSetting />
      </div>
    );
  }

}

export default Setting;
