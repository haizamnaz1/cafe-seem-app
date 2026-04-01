import React from 'react';
import './PreFooter.css';

const PreFooter = () => {
  return (
    <section className="prefooter" aria-labelledby="prefooter-heading">
      <div className="container prefooter__inner reveal">
        <div className="prefooter__copy">
          <h2 id="prefooter-heading" className="prefooter__title">
            Ready to taste the hills?
          </h2>
          <p className="prefooter__lead">
            Visit us on DS Senanayake Veediya — or browse reviews and directions before you arrive.
          </p>
        </div>
        <div className="prefooter__actions">
          <a className="btn btn-ghost prefooter__btn" href="#menu">
            View menu
          </a>
          <a
            className="btn btn-primary prefooter__btn prefooter__btn--light"
            href="https://share.google/dvb0f7H5otQ1T3Ica"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
