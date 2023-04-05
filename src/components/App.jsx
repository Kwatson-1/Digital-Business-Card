import React from 'react';
import Footer from './Footer';
import Info from './Info';
import About from './about';
import './App.css';
import profileImage from '../images/linkedin-profile.jpg'
import personalLogo from '../images/personal-Logo.png'
export default function App() {
    return (
        <div className='phone'>
            <div className='phone-screen'>
                <div className='profile-container'>
                    <img className='profile-image ' src={profileImage} alt="Profile Picture" />
                <Info />
                <About />
                <Footer />
            </div>
        </div>
        </div>
    )
}
