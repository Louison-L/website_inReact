// Navbar.js

/*import React from 'react';*/
import './Navbar.css'; 

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-header">
                    <img src="img/logo.jpg" alt="" className="navbar-logo" />
                    <h1 className="navbar-heading">Holidays Planners</h1>
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Destination</li>
                    <li>Tour</li>
                    <li>
                        <button className="reserve-btn">RESERVE</button>
                    </li>
                </ul>
            </nav>

            <div className="body-section">
                <h1>Enjoy The Travel with Holiday Planners</h1>
                <p>A journey of 1000 miles starts with single step. Import the full
                    demo content with 1 click and create  a head-turning website for
                    your travel agency
                </p>
               
            </div>
          
        </>
    );
};

export default Navbar;
