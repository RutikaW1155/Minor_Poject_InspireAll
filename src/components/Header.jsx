import React, { useState } from 'react';
import './Header.css';
import logo from '/loo.png'; // Replace this with your actual logo path

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">
          <span className="logo-inspire">Inspire</span>
          <span className="logo-all">All</span>
        </span>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#features">Profile</a>
        <a href="#marketplace">Business Info</a>
        <a href="#community">Post</a>
        <a href="#schemes">Schemes</a>
      </nav>

      <div className="desktop-auth">
        <a href="#signin" className="signin-link">Sign in</a>
        <button className="signup-btn">Sign up</button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
