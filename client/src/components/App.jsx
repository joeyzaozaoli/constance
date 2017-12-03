import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import DashBoard from './DashBoard.jsx';
import Narrative from './Narrative.jsx';
import Setting from './Setting.jsx';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path='/narrative' component={Narrative} />
            <Route path='/setting' component={Setting} />
            <Route path='/' component={DashBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
