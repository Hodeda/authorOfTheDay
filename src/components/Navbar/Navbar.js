import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return <div className="navbar-wrapper">
    <div className="navbar-logo">
        <img className="website-logo" src="/images/author_logo.png" alt="website logo"/>
    </div>
    <div className="navlink-wrapper">
        <span className="nav-link">Favorites</span>
        <span className="nav-link">Generator</span>
    </div>

  </div>;
};

export default Navbar;
