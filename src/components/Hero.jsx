import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';
import {
  fadeUpVariants,
  slideInRightVariants,
  viewportSettings,
  hoverLift
} from './animations';

const COFFEE_IMG =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__layout">
        <motion.div
          className="hero__copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <motion.h1
            id="hero-heading"
            className="hero__title"
            variants={fadeUpVariants}
          >
            The Heart of <span className="text-gradient">Flavors</span> in{' '}
            <span className="text-gradient">Kandy</span>
          </motion.h1>
          <motion.p
            className="hero__lead"
            variants={fadeUpVariants}
          >
            Authentic Sri Lankan taste and healthy international plates — Buddha bowls, Cheese Kottu, Kebuli rice, and
            premium coffee. <strong className="hero__strong">Halal-friendly</strong>, with vegan and vegetarian choices,
            served with spotless hygiene and genuine warmth.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUpVariants}
          >
            <motion.div whileHover={hoverLift}>
              <Link className="btn btn-primary" to="/menu">
                Explore menu
              </Link>
            </motion.div>
            <motion.div whileHover={hoverLift}>
              <a className="btn btn-ghost" href="https://share.google/dvb0f7H5otQ1T3Ica" target="_blank" rel="noreferrer">
                Order · Reserve
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__media"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.figure
            className="hero__figure"
            variants={slideInRightVariants}
          >
            <motion.img
              src={COFFEE_IMG}
              alt="Latte art on a wooden table at Seema Café"
              className="hero__img"
              width={640}
              height={800}
              loading="eager"
              decoding="async"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <motion.figcaption
              className="hero__caption"
              variants={fadeUpVariants}
            >
              House coffee · Roasted for slow afternoons in the hills
            </motion.figcaption>
            <motion.div
              className="hero__float"
              aria-hidden="true"
              variants={slideInRightVariants}
              whileHover={{ scale: 1.03 }}
            >
              <span className="hero__float-title">Chef's pick</span>
              <span className="hero__float-sub">Seasonal specials weekly</span>
            </motion.div>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
