import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="location">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo white">
            <span className="logo-symbol">S</span>
            <span className="logo-text">Seema<span>Cafe</span></span>
          </div>
          <p>Established in 2019. The heart of flavors in the hills of Kandy.</p>
          <div className="social-links">
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TT</a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Discover</h4>
          <ul>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#about">The Story</a></li>
            <li><a href="#reviews">Guest Love</a></li>
            <li><a href="#location">Find Us</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Visit Us in Kandy</h4>
          <p>No 129/2/4, DS Senanayake Veediya, Kandy</p>
          <p className="phone">+94 XX XXX XXXX</p>
          <div className="hours-grid">
            <div className="hour-item">
              <span>Sun - Thu:</span>
              <span>10:00 AM - 10:00 PM</span>
            </div>
            <div className="hour-item highlight">
              <span>Fri - Sat:</span>
              <span>10:00 AM - 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Seema Cafe & Restaurant. Handcrafted with Flavor in Kandy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
