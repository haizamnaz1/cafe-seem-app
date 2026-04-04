import React from 'react';
import './About.css';

const INTERIOR_IMG =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
const DETAIL_IMG =
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';

const About = () => {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <div className="about__media">
          <div className="about__frame">
            <img
              src={INTERIOR_IMG}
              alt="Warm dining room interior with pendant lighting"
              className="about__img"
              width={640}
              height={720}
              loading="lazy"
            />
            <div className="about__badge" aria-hidden="true">
              <span className="about__badge-year">2019</span>
              <span className="about__badge-text">Established</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <p className="section-eyebrow">About Seema Café</p>
          <h2 id="about-heading" className="section-title">
            A family table in the <em>heart of Kandy</em>
          </h2>
          <div className="about__copy">
            <p>
              Since 2019, we&apos;ve welcomed travelers and neighbors with a simple promise:{' '}
              <strong>authentic Sri Lankan taste</strong>, healthy international options, and service that feels personal.
            </p>
            <p>
              From Buddha bowls and protein toasts to Cheese Kottu, Kebuli rice, and burgers — we cook for long days of exploring
              and slow evenings in the hills. Halal-friendly, vegan, and vegetarian choices are part of who we are.
            </p>
            <p>
              Drop in for premium coffee, stay for conversation — and if you&apos;re planning ahead,{' '}
              <strong>follow us on Facebook</strong> for specials and weekend buzz.
            </p>
          </div>
          <a
            className="btn btn-primary about__fb"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit our Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
