import React from 'react'
import { NavLink } from 'react-router-dom';
import Emoji from "react-emoji-render";

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink exact to="/"><button type="button"><Emoji text="🏡" label="home" /></button></NavLink>
            <NavLink to="/drawing"><button type="button"><Emoji text="🖍" label="drawing" /></button></NavLink>
            <NavLink to="/giphy"><button type="button"><Emoji text="🤪" label="giphy" /></button></NavLink>
            <NavLink to="/messages"><button type="messages"><Emoji text="💬" label="messages" /></button></NavLink>
          </div>
            );
};

export default NavBar
