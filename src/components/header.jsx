import React from "react";
// import images 
import Logo from '../assets/images/logo-2.png';

function Header() {
    return(
        <header>
            {/* logo */}
            <a href="/">
                <img class="logo" src={Logo} alt="logo"/>
            </a>
            {/* bars */}
            <div class="menu-bars" id="header_menu">
                <div class="menu" >
                    <div class="links">
                        <a href="#"><i class="fa-solid fa-briefcase"></i> View Work</a>
                        <a href="#"><i class="fa-solid fa-envelope"></i> Send Message</a>
                        <a href="#"><i class="fa-solid fa-laptop-code"></i> My Skills</a>
                        <a href="/about"><i class="fa-regular fa-address-card"></i> More About Me</a>
                    </div>
                    <div class="menu-text">
                        <h4>Interested Working With Me ?</h4>
                        <p>Dont Hesitate Hit Send Message and leave a message, i will respond ASAP</p>
                    </div>
                </div>
                <div class="bars hovered" id="header_menu_bars">
                    <i class="fa-solid fa-bars-staggered"></i>
                </div>
            </div>
        </header>
    )
}

export default Header;