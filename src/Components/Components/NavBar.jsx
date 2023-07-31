import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
