import React from 'react';
import Interests from './interests';
import Footer from './footer';
import Info from './info';
import About from './about';
import './App.css';

export default function App() {
    return (
            <div className="phone">
                <div className="phone-screen">
                    <Info />
                    <About />
                    <Interests />
                    <Footer />
                </div>
            </div>
    )
}
