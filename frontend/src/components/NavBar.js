import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/drawing">🖍</NavLink>
      <NavLink to="/giphy">🤪</NavLink>
    </div>
  );
};


export default NavBar;
