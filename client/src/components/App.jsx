import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Narrative from './Narrative.jsx';
import ProcessSetting from '../containers/ProcessSetting.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/narrative' component={Narrative} />
          <Route exact path='/setting' component={ProcessSetting} />
        </Switch>
      </div>
    );
  }

}

export default App;
