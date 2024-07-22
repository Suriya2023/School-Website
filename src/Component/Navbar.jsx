import React from 'react';
import './Navbar.css';
import Logo from './Img/s2.png'

const Navbar = () => {
    return (
        <header className="navbar" id='FNavbar'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
               
                <nav className={`nav-links`}>
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">About Us</a>
                    <a href="#" className="nav-item">Vision</a>
                    <a href="#" className="nav-item">My Gallery</a>
                    <a href="#" className="nav-item">My Study</a>
                    <a href="#" className="nav-item">Admission</a>
                    <a href="#" className="nav-item">Achievement</a>
                </nav>
                <button className="login-button">Login</button>
            </div>
        </header>

        // nextnavbar.

        

        

    );
};

export default Navbar;
