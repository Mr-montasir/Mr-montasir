import React from "react";
// import Components
import Header from '../components/header.jsx';
import Contact from '../components/contact.jsx';

// import images 
import Dots from '../assets/images/dots.png';
import Main_Image from '../assets/images/about-cyber.gif';
import Facebook from '../assets/images/social-media/facebook.png';
import Instagram from '../assets/images/social-media/instagram.png';
import Twitter from '../assets/images/social-media/twitter.png'; 
import LinkedIn from '../assets/images/social-media/linkedin.png'; 
import Dribble from '../assets/images/icons/dribbble.png';
import Github from '../assets/images/icons/github.png';
import StackOverflow from '../assets/images/icons/stack-overflow.png';

// import js
import '../assets/js/script';

function home() {
    return(
        <>
        <div className="content">
            <div className="personal-image">
                <img src={Dots} className="dots" id="image_dots"/>
                <img className="myimage" src={Main_Image}/>
            </div>
            <div className="text">
                <h2 className="code_snippet">
                    <span className="number">1.</span>
                    <div className="code">
                        <span className="blue">document.</span><span className="yellow">write(</span><span className="green">'Hi There !!'</span><span className="yellow">)</span>
                    </div>
                </h2>
                <h1>
                    I'm a Fullstack Developer Very <span className="primary-color">Talented</span>  and  <span className="secondary-color">experienced</span>  in my domain
                </h1>
                <div className="social-media"> 
                    <a target="_blank" href="https://www.facebook.com/montaser.selmani/">
                        <img src={Facebook} alt="facebook Mountassir"/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/montasir.selmani/">
                        <img src={Instagram} alt="instagram Mountassir"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/Mr_montasir">
                        <img src={Twitter} alt="twitter Mountassir"/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/mountassir-selmani-4abbb6209/">
                        <img src={LinkedIn}/>
                    </a>
                </div>
            </div>
        </div>
        <div className="coding-icons">
            <a target="_blank" href="https://dribbble.com/Mr-montasir">
                <img src={Dribble} alt="Dribbble Mountassir"/>
            </a>
            <a target="_blank" href="https://github.com/mr-montasir">
                <img src={Github} alt="Github Mountassir"/>
            </a>
            <a target="_blank" href="https://stackoverflow.com/users/16093630/mr-montasir">
                <img src={StackOverflow} alt="Stack Overflow Mountassir"/>
            </a>
        </div>
        <Contact />
        </>
    )
}

export default home;