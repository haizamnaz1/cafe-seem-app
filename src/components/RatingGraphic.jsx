import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CountUpModule from 'react-countup';
import './RatingGraphic.css';

const CountUp = CountUpModule.default ?? CountUpModule;

export const STAR_PATH =
  'M12 2.5l2.9 6.1 6.8.6-5.1 4.5 1.5 6.6L12 16.9 6.9 20.3l1.5-6.6-5.1-4.5 6.8-.6L12 2.5z';

export const StarRow = ({ filled = 5, animate = false, reduceMotion = false, size = 'md' }) => (
  <div className={`rating-stars rating-stars--${size}`} aria-label={`${filled} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => {
      const starFill = Math.max(0, Math.min(1, filled - i));
      return (
        <span key={i} className="rating-stars__item" aria-hidden="true">
          <svg className="rating-stars__icon rating-stars__icon--empty" viewBox="0 0 24 24">
            <path d={STAR_PATH} />
          </svg>
          <motion.div
            className="rating-stars__fill"
            initial={{ width: reduceMotion || !animate ? `${starFill * 100}%` : '0%' }}
            whileInView={{ width: `${starFill * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
          >
            <svg className="rating-stars__icon rating-stars__icon--filled" viewBox="0 0 24 24">
              <path d={STAR_PATH} />
            </svg>
          </motion.div>
        </span>
      );
    })}
  </div>
);

const RING_RADIUS = 54;

/** Radial rating + stars + meta. Use variant "hero" for compact hero, "section" for testimonials header. */
export const RatingRingBlock = ({
  averageRating = 4.3,
  totalReviews = 240,
  variant = 'section',
  animateStars = true,
  className = '',
  ariaLabel,
  /** When true, hides accessible name (use inside a parent link with its own label). */
  ariaHidden = false,
  asMotion = true,
  countUpDuration = 2.2,
}) => {
  const reduceMotion = useReducedMotion();
  const ratingPercent = (averageRating / 5) * 100;
  const ringCircumference = 2 * Math.PI * RING_RADIUS;
  const label =
    ariaLabel ?? `Rated ${averageRating} out of 5 from ${totalReviews}+ verified reviews`;

  const inner = (
    <>
      <div className="rating-ring-block__graphic" aria-hidden="true">
        <svg className="rating-ring-block__svg" viewBox="0 0 132 132">
          <circle className="rating-ring-block__track" cx="66" cy="66" r={RING_RADIUS} />
          <motion.circle
            className="rating-ring-block__progress"
            cx="66"
            cy="66"
            r={RING_RADIUS}
            strokeDasharray={ringCircumference}
            initial={{
              strokeDashoffset: reduceMotion
                ? ringCircumference * (1 - ratingPercent / 100)
                : ringCircumference,
            }}
            whileInView={{ strokeDashoffset: ringCircumference * (1 - ratingPercent / 100) }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="rating-ring-block__score">
          <span className="rating-ring-block__number">
            <CountUp
              end={averageRating}
              decimals={1}
              duration={countUpDuration}
              enableScrollSpy
              scrollSpyOnce
            />
          </span>
          <span className="rating-ring-block__total">/ 5</span>
        </div>
      </div>
      <StarRow
        filled={averageRating}
        animate={animateStars}
        reduceMotion={reduceMotion}
        size={variant === 'hero' ? 'sm' : 'lg'}
      />
      <p className="rating-ring-block__meta">{totalReviews}+ verified reviews</p>
    </>
  );

  const rootClass = `rating-ring-block rating-ring-block--${variant} ${className}`.trim();
  const a11yProps = ariaHidden ? { 'aria-hidden': true } : { 'aria-label': label };

  if (asMotion) {
    return (
      <motion.div
        className={rootClass}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        {...a11yProps}
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <div className={rootClass} {...a11yProps}>
      {inner}
    </div>
  );
};
