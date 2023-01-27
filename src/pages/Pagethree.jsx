import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Pagethree(props) {
    return (
        <div className='homeContainer'>
        <h1>Page 3</h1>
            <nav className='page3Nav'>
                <NavLink to={'pageThree2'}>Page 3.5</NavLink>
                <NavLink to={'pageThree3'}>Page 3.5.2</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}

export default Pagethree;