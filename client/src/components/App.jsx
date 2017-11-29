import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Setting from './Setting.jsx';
import Narrative from './Narrative.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/setting' component={Setting} />
          <Route exact path='/narrative' component={Narrative} />
        </Switch>
      </div>
    );
  }

}

export default App;
