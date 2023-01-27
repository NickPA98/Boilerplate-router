import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";


function RootLayout() {
    return (
        <div className={'RouteLayout'}>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
