import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import DashBoard from './DashBoard.jsx';
import Narrative from './Narrative.jsx';
import Setting from './Setting.jsx';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path='/narrative' component={Narrative} />
            <Route path='/setting' component={Setting} />
            <Route path='/' component={DashBoard} />
          </Switch>
        </div>
      </HashRouter>
    );
  }

}

export default App;
