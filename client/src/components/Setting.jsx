import React from 'react';

import CompanySetting from '../containers/CompanySetting.jsx';
import ProcessSetting from '../containers/ProcessSetting.jsx';
import ControlOwnerSetting from '../containers/ControlOwnerSetting.jsx';
import AcronymSetting from '../containers/AcronymSetting.jsx';

class Setting extends React.Component {

  render() {
    return (
      <div>
        <CompanySetting />
        <ProcessSetting />
        <ControlOwnerSetting />
        <AcronymSetting />
      </div>
    );
  }

}

export default Setting;
