import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="gradient-overlay"></div>
        {/* Placeholder for high-end cinematic video or image */}
        <div className="hero-visual">
          <div className="floating-plate plate-1"></div>
          <div className="floating-plate plate-2"></div>
        </div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text reveal">
          <span className="badge">Kandy’s Heart of Flavor</span>
          <h1>Experience The <span>Art of Taste</span> In The Hills</h1>
          <p>Established in 2019, where authentic Sri Lankan spices meet healthy international flair. From signature Buddha Bowls to our legendary Cheese Kottu.</p>
          
          <div className="hero-btns">
            <button className="btn btn-primary btn-lg">Explore Menu</button>
            <button className="btn btn-secondary btn-lg">Find Our Cafe</button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">5.0</span>
              <span className="stat-label">Google Rating</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">12.5k+</span>
              <span className="stat-label">Happy Guests</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">Est. 2019</span>
              <span className="stat-label">Since Day One</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
