import React from 'react';
import {Outlet} from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <nav className="bg-light-purple pa3">
      <a className="link dim white" href="/">Home</a>
    </nav>

      <Outlet/>
    </div>

  );
}

export default NavBar;
