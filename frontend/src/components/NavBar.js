import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/"><button type="button">🏡</button></NavLink>
            <NavLink to="/drawing"><button type="button">🖍</button></NavLink>
            <NavLink to="/giphy"><button type="button">🤪</button></NavLink>
            <NavLink to="/messages"><button type="messages">💬</button></NavLink>
          </div>
            );
};

export default NavBar
