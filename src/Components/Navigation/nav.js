import React from 'react';
import {
  // Outlet,
  useNavigate} from 'react-router-dom';







function NavBar() {




  const navigate = useNavigate()
 

 const goHome = () => navigate('/home');


  return (
    <div>
    <nav className="bg-light-purple pa3">
      <button onClick = {goHome}>Home</button>
    </nav>
    </div>

  );
}

export default NavBar;
