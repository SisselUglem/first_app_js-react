import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="toggler"></div>
            <ul className="dropdown">
                <li class="nav-item">HOME</li>
                <li class="nav-item">SERVICES</li>
                <li class="nav-item">CONTACT</li>
            </ul>  
        </nav>
    )
}

export default Navbar;