import React , {Component} from 'react'


class ContactForm extends Component {
    state = {
        contact_method: {
            icon       : '/images/icons/phone_icon.png',
            placeholder: 'Email',
            type       : 'email',
        }
    };

    validate_inputs = () => {
        alert("If you didn't fill the form correctly i will not receive your message, make sure you did while i'm still working to make verifications on the inputs before form submition.")
        console.log('Form validation will be available in no time!');
    }
    switch_contact_method = () => {
        let { contact_method } = this.state;
        if (contact_method.type === 'email') {
            this.setState({ 
                contact_method: {
                    icon: '/images/icons/email_icon.png',
                    placeholder: 'Phone',
                    type       : 'phone',
                }
            });
        } else {
            this.setState({
                contact_method: {
                    icon       : '/images/icons/phone_icon.png',
                    placeholder: 'Email',
                    type       : 'email',
                }
            });
        }
    }
    render() {
        return (
            <form action='/php/contact.php' method='POST' onSubmit={this.validate_inputs}>
                <div className="element">
                    <input type="text" name="username" placeholder="Name/Nickname or whatever" id="username" />
                </div>
                <div className="element">
                    <input 
                      type={this.state.contact_method.type}
                      name='contact_method' 
                      placeholder={this.state.contact_method.placeholder} 
                      id='contact_method'
                    />
                    <input type="hidden" name="method" value={this.state.contact_method.type} />
                    <div className="switcher_icon hovered" onClick={this.switch_contact_method}>
                        <img src={this.state.contact_method.icon}
                        alt="Email Or Phone Number" />
                    </div>
                </div>
                <div className="element hide">
                    <input type="hidden" name="service_type" placeholder="What Service Do you want" id="service_type" />
                    <div className="dropdown">
                        <div className="choosen">
                            <span className="default">Service</span><img src='/images/icons/hacker.png' />
                        </div>
                        <div className="option">
                            Frontend <i className="fa-duotone fa-window"></i>
                        </div>
                        <div className="option">
                            Backend <i className="fa-solid fa-database"></i>
                        </div>
                        <div className="option">
                            Fullstack <i className="fa-duotone fa-layer-group"></i>
                        </div>
                    </div>
                </div>
                <div className="element">
                    <textarea name="user_message" id="user_message" placeholder="Dont be shame, Write Me a mesage!"></textarea>
                </div>
                <input type="submit" value="Go for Launch!" />
            </form>
        )
    }
}

export default ContactForm