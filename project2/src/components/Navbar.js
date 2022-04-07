import React from 'react';
import airbnbLogo from "../images/airbnb-logo.jpg";

export default function Navbar() {
    return (
        <nav className='nav'>
            <img className='nav--logo' src={airbnbLogo} alt='airbnb logo' />
        </nav>
    )
}