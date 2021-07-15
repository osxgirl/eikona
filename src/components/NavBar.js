import React from 'react'
import { NavLink } from 'react-router-dom';
import Emoji from 'a11y-react-emoji'
const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/"><button type="button"><Emoji symbol="🏡" label="home" /></button></NavLink>
            <NavLink to="/drawing"><button type="button"><Emoji symbol="🖍" label="drawing" /></button></NavLink>
            <NavLink to="/giphy"><button type="button"><Emoji symbol="🤪" label="giphy" /></button></NavLink>
            <NavLink to="/messages"><button type="messages"><Emoji symbol="💬" label="messages" /></button></NavLink>
            <NavLink to="/counter"><button type="counter"><Emoji symbol="⏱" label="counter" /></button></NavLink>
          </div>
            );
};

export default NavBar
