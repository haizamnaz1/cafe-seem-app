import React from 'react';
import './Hero.css';

const COFFEE_IMG =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__copy reveal">
          <h1 id="hero-heading" className="hero__title">
            The Heart of <span className="text-gradient">Flavors</span> in{' '}
            <span className="text-gradient">Kandy</span>
          </h1>
          <p className="hero__lead">
            Authentic Sri Lankan taste and healthy international plates — Buddha bowls, Cheese Kottu, Kebuli rice, and
            premium coffee. <strong className="hero__strong">Halal-friendly</strong>, with vegan and vegetarian choices,
            served with spotless hygiene and genuine warmth.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#menu">
              Explore menu
            </a>
            <a className="btn btn-ghost" href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
              Order · Reserve
            </a>
          </div>
        </div>

        <div className="hero__media reveal">
          <figure className="hero__figure">
            <img
              src={COFFEE_IMG}
              alt="Latte art on a wooden table at Seema Café"
              className="hero__img"
              width={640}
              height={800}
              loading="eager"
              decoding="async"
            />
            <figcaption className="hero__caption">House coffee · Roasted for slow afternoons in the hills</figcaption>
            <div className="hero__float" aria-hidden="true">
              <span className="hero__float-title">Chef’s pick</span>
              <span className="hero__float-sub">Seasonal specials weekly</span>
            </div>
          </figure>
        </div>
      </div>

      <div className="container hero__stats-wrap">
        <ul className="hero__stats reveal" aria-label="Highlights">
          <li className="hero__stat">
            <div className="hero__stat-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
            </div>
            <div className="hero__stat-content">
              <span className="hero__stat-k">2019</span>
              <span className="hero__stat-v">Established</span>
            </div>
          </li>
          <li className="hero__stat">
            <div className="hero__stat-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="hero__stat-content">
              <span className="hero__stat-k">Travelers</span>
              <span className="hero__stat-v">A favorite stop in Kandy</span>
            </div>
          </li>
          <li className="hero__stat">
            <div className="hero__stat-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="hero__stat-content">
              <span className="hero__stat-k">Full day</span>
              <span className="hero__stat-v">Breakfast through late evening</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
