import React from 'react';
import './ContactMe.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import MailIcons from '@material-ui/icons/Mail';

const ContactMe = () => {
    return (
        <div className="contact-me">
        <ScrollAnimation animateIn="fadeInUp">
            <div className="contact-title">
                <pre>Contact Me</pre>
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
            <div className="contact-email">
                <a className="a" href="mailto:yoyounn88@gmail.com"><pre><MailIcons />&nbsp;yoyounn88@gmail.com</pre></a>
            </div>
        </ScrollAnimation>
        </div>
    )
}

export default ContactMe;