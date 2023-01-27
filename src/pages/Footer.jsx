import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (

            <footer className={'footer'}>
                <h3 className={'footerText'}>footer</h3>
                <Link to={'/'}>Home</Link>
                <Link to={'pagetwo'}>Page2</Link>
                <Link to={'pagethree'}>Page3</Link>
            </footer>

    );
}

export default Footer;