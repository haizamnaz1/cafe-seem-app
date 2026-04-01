import React from 'react';
import './EventsStrip.css';

const EventsStrip = () => {
  return (
    <section className="events-strip" id="events" aria-labelledby="events-heading">
      <div className="container events-strip__inner reveal">
        <div className="events-strip__text">
          <h2 id="events-heading" className="events-strip__title">
            Gatherings &amp; occasions
          </h2>
          <p className="events-strip__lead">
            Planning a small celebration, tour-group stop, or a relaxed evening with friends? Message us for seating, set menus, and
            seasonal specials — we&apos;ll tailor the experience to your group.
          </p>
        </div>
        <a className="btn btn-ghost events-strip__btn" href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
          Enquire via Google
        </a>
      </div>
    </section>
  );
};

export default EventsStrip;
