import React from 'react';
import { Link } from 'react-router-dom';

class SettingMenu extends React.Component {

  render() {
    return (
      <div>
        <button><Link to='/setting/controlowners'>Control Owners</Link></button>
        <button><Link to='/setting/acronyms'>Acronyms</Link></button>
      </div>
    );
  }

}

export default SettingMenu;
