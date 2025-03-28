import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-primary">Build</span>
          <span className="logo-secondary">MyCV</span>
        </Link>

        <div className="navbar-menu">
          <Link to="/templates" className="navbar-item">
            Templates
          </Link>
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <button onClick={() => navigate("./login")} className="navbar-button">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
