import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  // Handle navigation with hash links
  const handleNavClick = (e, path) => {
    e.preventDefault();
    close();
    
    // Small delay to let sidebar close animation complete
    setTimeout(() => {
      if (path.includes('#')) {
        const [route, hash] = path.split('#');
        
        // Navigate to route first if needed
        if (route && window.location.pathname !== route) {
          navigate(route);
        }
        
        // Scroll to section after navigation
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        navigate(path);
      }
    }, 300);
  };

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
              <a href="/" onClick={(e) => handleNavClick(e, '/')}>
                Home
              </a>
            </li>
            <li>
              <a href="/menu" onClick={(e) => handleNavClick(e, '/menu')}>
                Menu
              </a>
            </li>
            <li>
              <a href="/#events" onClick={(e) => handleNavClick(e, '/#events')}>
                Events
              </a>
            </li>
            <li>
              <a href="/#map" onClick={(e) => handleNavClick(e, '/#map')}>
                Map
              </a>
            </li>
            <li>
              <a href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>
                About
              </a>
            </li>
            <li className="nav-links__mobile-only">
              <a href="/#reviews" onClick={(e) => handleNavClick(e, '/#reviews')}>
                Reviews
              </a>
            </li>
            <li className="nav-links__mobile-only">
              <a href="/#location" onClick={(e) => handleNavClick(e, '/#location')}>
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
