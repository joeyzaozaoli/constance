import React from 'react';

import CompanySetting from '../containers/CompanySetting.jsx';
import ProcessSetting from '../containers/ProcessSetting.jsx';
import ControlOwnerSetting from '../containers/ControlOwnerSetting.jsx';

class Setting extends React.Component {

  render() {
    return (
      <div>
        <CompanySetting />
        <ProcessSetting />
        <ControlOwnerSetting />
      </div>
    );
  }

}

export default Setting;
