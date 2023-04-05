// Image, name, title, 
import React from 'react';
import linkedinApp from '../images/linkedin-app.png';
import emailApp from '../images/email-app.png';
import phoneApp from '../images/phone-app.png';
export default function Info() {
    return (
        <div className='content'>
            <h1><span>Kyle</span> Watson</h1>

            <h4 className='info-role'>Developer</h4>

            <div>
                <p>
                    <img className="phone-app" src={phoneApp} />
                    +61 424466010
                </p>
                <p>
                    <img className="linkedin-app" src={linkedinApp} />
                    /in/kyle-watson-dev
                </p>
                <p>
                    <img className="email-app" src={emailApp} />
                    kyle.p.watson@gmail.com
                </p>
            </div>

        </div>
    )


}