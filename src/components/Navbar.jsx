import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`} id="top">
        <nav className="navbar container" aria-label="Primary">
          <Link to="/" className="brand" onClick={close} aria-label="Seema Café home">
            <span className="brand__mark" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 10c0-3.5 2.5-6 6-6s6 2.5 6 6v2c0 2-1.5 3.5-3.5 3.5H14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M9 18h6M12 15v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="brand__text">
              Seema<span className="brand__accent">Café</span>
            </span>
          </Link>

          <ul className={`nav-links ${open ? 'nav-links--open' : ''}`}>
            <li>
              <Link to="/" onClick={close}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={close}>
                Menu
              </Link>
            </li>
            <li>
              <a href="/#events" onClick={close}>
                Events
              </a>
            </li>
            <li className="nav-links__mobile-only">
              <a href="/#about" onClick={close}>
                About
              </a>
            </li>
            <li className="nav-links__mobile-only">
              <a href="/#reviews" onClick={close}>
                Reviews
              </a>
            </li>
            <li className="nav-links__mobile-only">
              <a href="/#location" onClick={close}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <a className="btn btn-primary nav-cta" href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
              Book a table
            </a>
          </div>

          <button
            type="button"
            className={`nav-toggle ${open ? 'nav-toggle--open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">Toggle menu</span>
            <span className="nav-toggle__bar" aria-hidden="true" />
            <span className="nav-toggle__bar" aria-hidden="true" />
          </button>
        </nav>
      </header>
      <div
        id="mobile-panel"
        className={`nav-backdrop ${open ? 'nav-backdrop--visible' : ''}`}
        aria-hidden={!open}
        onClick={close}
      />
    </>
  );
};

export default Navbar;
