import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="logo">
          <span className="logo-symbol">S</span>
          <span className="logo-text">Seema<span>Cafe</span></span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#menu">Our Menu</a></li>
          <li><a href="#about">The Story</a></li>
          <li><a href="#reviews">Guest Love</a></li>
          <li><a href="#location">Find Us</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn btn-primary">Order Now</button>
        </div>

        <button className="mobile-toggle">
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
