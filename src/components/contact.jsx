import React from "react";
// import images 
import Hacker from '../assets/images/icons/hacker.png';
import handshake from '../assets/images/icons/handshake.png';
import messages from '../assets/images/icons/messages.png';
// import php handelers
import php_config from '../php/config.php';
import contact_handeler from '../php/contact.php';
function Contact() {
    return(
        <div className="contact">
            <h2 className="Section_Title">{'Say Cheese! (And contact me)'}</h2>
            <div className="contact_content">
                <div className="left">
                    <div className="grid">
                        <div className="details">
                            <h3><i class="fa-solid fa-address-card"></i> Contact Details</h3>
                            <p>My name is Mountassir Selmani and I am located in Tanger, Morocco. If you need to reach me, feel free to call me at +212 657 191 955.</p>
                        </div>
                        <div className="details">
                            <h3><i class="fa-solid fa-laptop-code"></i> Web Development</h3>
                            <p>Experienced in everything related to web development, i can build you a website from 0 to hero 🐱‍🏍</p>
                        </div>
                        <div className="details">
                            <h3><i class="fa-brands fa-playstation"></i> Video Games</h3>
                            <p>I believe that nothing beats a good video game session.</p>
                            <br />
                            <p className="code_snippet center_x">
                                <div className="code">
                                    <span className="number">2. </span>
                                <span className="blue"> montasir.</span>
                                <span className="yellow">addEventListener{'('}</span>
                                <span className="green">'Play video Games'</span>
                                <span className="blue"> , </span>  
                                <span className="pink">{'()=> {'}</span>  
                                <span className="blue"> Enjoy++ </span>  
                                <span className="pink">{' }'}</span> 
                                <span className="yellow">{')'}</span> 
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="what_form">
                        <div className="to_contact active"><span>Message</span> <img src={messages} alt="Message Mountassir" /></div>
                        <div className="to_hire"><span>Hire</span> <img src={handshake} alt="Hire Mountassir" /></div>
                    </div>
                    <form action={contact_handeler} method='POST' >
                        <div className="element">
                            <input type="text" name="username" placeholder="Name/Nickname or whatever" id="username" />
                        </div>
                        <div className="element">
                            <input type="email" name="email" placeholder="Email" id="email" />
                        </div>
                        <div className="element hide">
                            <input type="hidden" name="service_type" placeholder="What Service Do you want" id="service_type" />
                            <div className="dropdown">
                                <div className="choosen">
                                    <span className="default">Service</span><img src={Hacker} />
                                </div>
                                <div className="option">
                                    Frontend <i class="fa-duotone fa-window"></i>
                                </div>
                                <div className="option">
                                    Backend <i class="fa-solid fa-database"></i>
                                </div>
                                <div className="option">
                                    Fullstack <i class="fa-duotone fa-layer-group"></i>
                                </div>
                            </div>
                        </div>
                        <div className="element">
                            <textarea name="user_message" id="user_message" placeholder="Dont be shame, Write Me a mesage!"></textarea>
                        </div>
                        <input type="submit" value="Go for Launch!" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;