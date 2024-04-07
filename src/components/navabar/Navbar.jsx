import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">|| जय श्री राम ||</div>
        <div>
          <ul className="nav-links">
          
            <li><a href="#about">Mission</a></li>
            
            <li><a href="#projects">Our Work</a></li>
            <NavLink to={"/Arti"}>Arti</NavLink>

            {/* <li><a href="#">Blog</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">|| जय श्री राम ||</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>Mission</a></li>
            <li><a href="#project" onClick={toggleMenu}>Our Work</a></li>
            <NavLink to={"/Arti"}>Arti</NavLink>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
