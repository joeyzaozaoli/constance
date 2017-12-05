import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <button><Link to='/'>Dashboard</Link></button>
    <button><Link to='/narrative'>Narrative</Link></button>
    <button><Link to='/setting'>Setting</Link></button>
  </div>
)

export default NavBar;
