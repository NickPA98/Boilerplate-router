import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <header>
            <nav className={'navbar'}>
                <h1>Navigation bar</h1>
                <div className={'Links'}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='pagetwo'>Page2</NavLink>
                    <NavLink to='pagethree'>Page3</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;