import React from "react";
import { Link } from 'react-router-dom';
// import header script
import '../assets/js/header.js';

function Header() {
    return(
        <header>
            {/* logo */}
            <Link to={`/`}>
                <img className="logo" src='/images/logo-2.png' alt="logo"/>
            </Link>
            {/* bars */}
            <div className="menu-bars" id="header_menu">
                <div className="menu" >
                    <div className="links">
                        <Link to={`/admin`}>
                        <i className="fa-regular fa-lock"></i> Admin
                        </Link>
                        <Link to={`#`}>
                            <i className="fa-solid fa-briefcase"></i> View Work
                        </Link>
                        <Link to={`#`}>
                            <i className="fa-solid fa-envelope"></i> Send Message
                        </Link>
                        <Link to={`#`}>
                            <i className="fa-solid fa-laptop-code"></i> My Skills
                        </Link>
                        <Link to={`/about`}>
                            <i className="fa-regular fa-address-card"></i> More About Me
                        </Link>
                    </div>
                    <div className="menu-text">
                        <h4>Interested Working With Me ?</h4>
                        <p>Dont Hesitate Hit Send Message and leave a message, i will respond ASAP</p>
                    </div>
                </div>
                <div className="bars hovered" id="header_menu_bars">
                    <i className="fa-solid fa-bars-staggered"></i>
                </div>
            </div>
        </header>
    )
}

export default Header;