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
            <span className="hero__stat-k">2019</span>
            <span className="hero__stat-v">Established</span>
          </li>
          <li className="hero__stat">
            <span className="hero__stat-k">Travelers</span>
            <span className="hero__stat-v">A favorite stop in Kandy</span>
          </li>
          <li className="hero__stat">
            <span className="hero__stat-k">Full day</span>
            <span className="hero__stat-v">Breakfast through late evening</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
