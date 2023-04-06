// Contains social icons

import React from 'react';
import personalLogo from '../images/personal-logo.png';
export default function Footer() {
    return (
        <div className='footer-container'>
            <img class className='personal-logo' src={personalLogo} alt='Personal logo using KW initials' />
        </div>
    )
}