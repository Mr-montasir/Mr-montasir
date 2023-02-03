import React from "react";
// import Components
import Header from '../components/header.jsx';

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

function home() {
    return(
    <>
        <div class="content">
            <div class="personal-image">
                <img src={Dots} class="dots" id="image_dots"/>
                <img class="myimage" src={Main_Image}/>
            </div>
            <div class="text">
                <h2>
                    <span class="number">1.</span>
                    <div class="code">
                        <span class="blue">document.</span><span class="yellow">write(</span><span class="green">'Hi There !!'</span><span class="yellow">)</span>
                    </div>
                </h2>
                <h1>
                    I'm a Fullstack Developer Very <span class="primary-color">Talented</span>  and  <span class="secondary-color">experienced</span>  in my domain
                </h1>
                <div class="social-media"> 
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
        <div class="coding-icons">
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
    </>
    )
}

export default home;