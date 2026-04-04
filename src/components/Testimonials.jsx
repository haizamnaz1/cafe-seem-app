import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RatingRingBlock, StarRow } from './RatingGraphic';
import './Testimonials.css';

const Testimonials = () => {
  const reduceMotion = useReducedMotion();
  const totalReviews = 240;
  const averageRating = 4.3;

  const reviews = [
    {
      id: 1,
      name: 'Ama W.',
      role: 'Google Review',
      source: 'Google',
      text: 'After walking around Kandy lake, their Buddha bowl felt super fresh and balanced. Calm place to recharge.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Praveen S.',
      role: 'Kandy Local',
      source: 'Local',
      text: 'Cheese kottu and iced coffee are consistently good. Staff remembers regulars and service stays warm.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Hiran J.',
      role: 'Traveler',
      source: 'Traveler',
      text: 'Huge burger portions and quick service before we headed back uphill. Easy recommendation in central Kandy.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Sarah M.',
      role: 'European Backpacker',
      source: 'Traveler',
      text: 'Found Cafe Seema by chance and stayed almost three hours. Quiet upstairs atmosphere, genuinely great coffee.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Nilanthi R.',
      role: 'Regular',
      source: 'Local',
      text: 'Avocado toast is my Saturday ritual. The kitchen quality feels reliable every single visit.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <header className="testimonials__head">
          <div className="testimonials__intro">
            <p className="section-eyebrow">Experience</p>
            <h2 id="reviews-heading" className="section-title">
              What our customers <em>say</em>
            </h2>
            <p className="section-lead">
              Honest words from travelers and locals — consistency, warmth, and plates worth repeating.
            </p>
          </div>

          <RatingRingBlock
            variant="section"
            averageRating={averageRating}
            totalReviews={totalReviews}
            animateStars
          />
        </header>

        <ul className="testimonials__mosaic" aria-label="Customer testimonials">
          {reviews.map((rev) => (
            <motion.li
              key={rev.id}
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial__card">
                <div className="testimonial__topline">
                  <StarRow filled={rev.rating} reduceMotion={reduceMotion} />
                  <span className="testimonial__source">{rev.source}</span>
                </div>
                <blockquote className="testimonial__quote">
                  <p>{rev.text}</p>
                </blockquote>
                <footer className="testimonial__footer">
                  <div className="testimonial__avatar" aria-hidden="true">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial__name">{rev.name}</p>
                    <p className="testimonial__role">{rev.role}</p>
                  </div>
                </footer>
              </div>
            </motion.li>
          ))}
        </ul>
        <div className="testimonials__cta">
          <a className="btn btn-primary" href="https://www.instagram.com/cafeseem/" target="_blank" rel="noreferrer">
            Read More Reviews
          </a>
          <a
            className="btn btn-ghost"
            href="https://maps.google.com/?q=Cafe+Seema+Kandy"
            target="_blank"
            rel="noreferrer"
          >
            Visit Us in Kandy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
