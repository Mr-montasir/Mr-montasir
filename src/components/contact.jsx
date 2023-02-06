import React from "react";

// import forms
import ContactForm from "./forms/contact_form";

function Contact() {
    return(
        <div className="contact">
            <h2 className="Section_Title">{'Say Cheese! (And contact me)'}</h2>
            <div className="contact_content">
                <div className="left">
                    <div className="grid">
                        <div className="details">
                            <h3><i className="fa-solid fa-address-card"></i> Contact Details</h3>
                            <p>My name is Mountassir Selmani and I am located in Tanger, Morocco. If you need to reach me, feel free to call me at +212 657 191 955.</p>
                        </div>
                        <div className="details">
                            <h3><i className="fa-solid fa-laptop-code"></i> Web Development</h3>
                            <p>Experienced in everything related to web development, i can build you a website from 0 to hero 🐱‍🏍</p>
                        </div>
                        <div className="details">
                            <h3><i className="fa-brands fa-playstation"></i> Video Games</h3>
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
                        <div className="to_contact active"><span>Message</span> <img src='/images/icons/messages.png' alt="Message Mountassir" /></div>
                        <div className="to_request"><span>Request</span> <img src='/images/icons/handshake.png' alt="request Mountassir" /></div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact;