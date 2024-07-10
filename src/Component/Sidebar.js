import React, { useState } from 'react';
import './Sidebar.css';

const SideNav = () => {
  const [navWidth, setNavWidth] = useState(0);

  const openNav = () => {
    setNavWidth(250);
  };

  const closeNav = () => {
    setNavWidth(0);
  };

  return (
    <div>
      <div id="mySidenav" className="sidenav" style={{ width: navWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">dashboard</a>
        <a href="#">profile</a>
        <a href="#">Enter Plate Number</a>
        <a href="#">Mistakes</a>
        <a href="#">Log Out</a>
      </div>
      <span className="openbtn" onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
};

export default SideNav;