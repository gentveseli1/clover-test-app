import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../img/clover_logo.png';

function Header() {
    return (
        <>
            <div className="logo-holder">
                <Link to="/">
                    <img src={logo} alt={"logo"} className="mt-3" />
                </Link>
            </div>
        </>
    )
}

export default Header;