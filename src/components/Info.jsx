// Image, name, title, 
import React from 'react';
import linkedinApp from '../images/linkedin-app.png';
import emailApp from '../images/email-app.png';
import phoneApp from '../images/phone-app.png';
export default function Info() {
    return (
        <div className='info-container'>
            <h1><span>Kyle</span> Watson</h1>

            <h2 className='info-role'>Developer</h2>

            <div className='contact-info'>
                <p className='contact-detail'>
                    <img className="phone-app" src={phoneApp} />
                    +61 424466010
                </p>
                <p className='contact-detail'>
                    <img className="linkedin-app" src={linkedinApp} />
                    /in/kyle-watson-dev
                </p>
                <p className='contact-detail'>
                    <img className="email-app" src={emailApp} />
                    kyle.p.watson@gmail.com
                </p>
            </div>
        </div>
    )


}