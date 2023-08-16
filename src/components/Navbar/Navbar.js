import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const handleNavigation = (event) => {
        const path = event.currentTarget.id;
        navigate(path);
    };

  return <div className="navbar-wrapper">
    <div className="navbar-logo">
        <img id='/' className="website-logo" src="/images/author_logo.png" alt="website logo" onClick={handleNavigation}/>
    </div>
    <div className="navlink-wrapper">
        <span id='/favorites' className="nav-link" onClick={handleNavigation}>Favorites</span>
        <span id='/generators' className="nav-link" onClick={handleNavigation}>Generator</span>
    </div>

  </div>;
};

export default Navbar;
