import React from "react";
// import Components
import Contact from '../components/contact.jsx';


// import js
import '../assets/js/script';

function home() {
    return(
        <>
        <div className="content">
            <div className="personal-image">
                <img src='/images/dots.png' className="dots" id="image_dots"/>
                <img className="myimage" src='/images/about-cyber.gif'/>
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
                        <img src='/images/social-media/facebook.png' alt="facebook Mountassir"/>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/montasir.selmani/">
                        <img src='/images/social-media/instagram.png' alt="instagram Mountassir"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/Mr_montasir">
                        <img src='/images/social-media/twitter.png' alt="twitter Mountassir"/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/mountassir-selmani-4abbb6209/">
                        <img src='/images/social-media/linkedin.png'/>
                    </a>
                </div>
            </div>
        </div>
        <div className="coding-icons">
            <a target="_blank" href="https://dribbble.com/Mr-montasir">
                <img src='/images/icons/dribbble.png' alt="Dribbble Mountassir"/>
            </a>
            <a target="_blank" href="https://github.com/mr-montasir">
                <img src='/images/icons/github.png' alt="Github Mountassir"/>
            </a>
            <a target="_blank" href="https://stackoverflow.com/users/16093630/mr-montasir">
                <img src='/images/icons/stack-overflow.png' alt="Stack Overflow Mountassir"/>
            </a>
        </div>
        <Contact />
        </>
    )
}

export default home;