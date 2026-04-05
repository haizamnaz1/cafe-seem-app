import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="location">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__mark" aria-hidden="true">
              S
            </span>
            <span className="footer__wordmark">
              Seema<span className="footer__wordmark-accent">Café</span>
            </span>
          </Link>
          <p className="footer__tagline">
            Established in 2019 — authentic Sri Lankan flavors, healthy international plates, and hospitality rooted in Kandy.
          </p>
          <div className="footer__social" aria-label="Social links">
            <a href="https://www.instagram.com" className="footer__social-link" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com" className="footer__social-link" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Quick links">
          <h2 className="footer__heading">Quick links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/#events">Events</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/#location">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__visit">
          <h2 className="footer__heading">Contact</h2>
          <address className="footer__address">
            No 129/2/4, DS Senanayake Veediya
            <br />
            Kandy, Sri Lanka
          </address>
          <p className="footer__contact-line">
            For the latest phone number and holiday hours, see our{' '}
            <a href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
              Google Business profile
            </a>
            .
          </p>
          <div className="footer__hours">
            <div className="footer__hour-row">
              <span>Sun — Thu</span>
              <span>10:00 — 22:00</span>
            </div>
            <div className="footer__hour-row footer__hour-row--accent">
              <span>Fri — Sat</span>
              <span>10:00 — 23:00</span>
            </div>
          </div>
          <a className="footer__maps" href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
            Directions & reviews on Google
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Seema Café & Restaurant. Crafted with care in Kandy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
