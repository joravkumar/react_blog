import React from 'react';

export default function Header() {
  return (
    <div className="topnav" >
    <div className="navbar-brand">
        <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"  className="logo img-responsive" alt="logo" /> 
    </div>
    <div className="nav-links">
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    </div>
  );
}
