import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import CompanySetting from '../containers/CompanySetting.jsx';
import ProcessSetting from '../containers/ProcessSetting.jsx';
import ControlOwnerSetting from '../containers/ControlOwnerSetting.jsx';
import AcronymSetting from '../containers/AcronymSetting.jsx';
import SampleSizeMatrixSetting from '../containers/SampleSizeMatrixSetting.jsx';

const Setting = ({match}) => (
  <BrowserRouter>
    <div>
      <div>
        <button><Link to={`${match.url}/`}>Company</Link></button>
        <button><Link to={`${match.url}/processes`}>Processes</Link></button>
        <button><Link to={`${match.url}/controlowners`}>Control Owners</Link></button>
        <button><Link to={`${match.url}/acronyms`}>Acronyms</Link></button>
        <button><Link to={`${match.url}/samplesizematrix`}>Sample Size Matrix</Link></button>
      </div>
      <Switch>
        <Route exact path={`${match.url}/`} component={CompanySetting} />
        <Route path={`${match.url}/processes`} component={ProcessSetting} />
        <Route path={`${match.url}/controlowners`} component={ControlOwnerSetting} />
        <Route path={`${match.url}/acronyms`} component={AcronymSetting} />
        <Route path={`${match.url}/samplesizematrix`} component={SampleSizeMatrixSetting} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Setting;
