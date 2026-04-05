import React from 'react';
import { motion } from 'framer-motion';
import './PreFooter.css';
import {
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  hoverLift,
  viewportSettings
} from './animations';

const PreFooter = () => {
  return (
    <section className="prefooter" id="map" aria-labelledby="prefooter-heading">
      <div className="container">
        <motion.header
          className="prefooter__head"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUpVariants}
        >
          <p className="section-eyebrow">Visit us</p>
          <h2 id="prefooter-heading" className="section-title">
            Ready to <em>taste</em> the hills?
          </h2>
          <p className="section-lead">
            Located in the heart of Kandy — authentic flavors, warm hospitality, and a view worth the journey.
          </p>
        </motion.header>

        <div className="prefooter__content">
          <motion.div
            className="prefooter__map"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={slideInLeftVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6!2d80.6337!3d7.2936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTcnMzYuMCJOIDgwwrAzOCcwMS4yIkU!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Seema Café Location - Kandy, Sri Lanka"
            />
            <motion.div
              className="prefooter__map-overlay"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://maps.google.com/?q=Seema+Cafe+Kandy+Sri+Lanka"
                target="_blank"
                rel="noreferrer"
                className="prefooter__map-btn"
                whileHover={hoverLift}
              >
                Open in Google Maps
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="prefooter__info"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={slideInRightVariants}
          >
            <div className="prefooter__info-card">
              <h3 className="prefooter__info-title">Find us</h3>
              <address className="prefooter__address">
                No 129/2/4, DS Senanayake Veediya<br />
                Kandy, Sri Lanka
              </address>

              <div className="prefooter__hours">
                <h4 className="prefooter__hours-title">Opening hours</h4>
                <div className="prefooter__hours-row">
                  <span>Sun — Thu</span>
                  <span>10:00 — 22:00</span>
                </div>
                <div className="prefooter__hours-row prefooter__hours-row--accent">
                  <span>Fri — Sat</span>
                  <span>10:00 — 23:00</span>
                </div>
              </div>

              <div className="prefooter__actions">
                <motion.div whileHover={hoverLift} style={{ flex: 1 }}>
                  <a className="btn btn-primary" href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
                    Get directions
                  </a>
                </motion.div>
                <motion.div whileHover={hoverLift} style={{ flex: 1 }}>
                  <a className="btn btn-ghost" href="tel:+94701234567">
                    Call us
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
