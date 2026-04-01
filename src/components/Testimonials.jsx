import React from 'react';
import './Testimonials.css';

const StarRow = ({ count = 5 }) => (
  <div className="stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="stars__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5l2.9 6.1 6.8.6-5.1 4.5 1.5 6.6L12 16.9 6.9 20.3l1.5-6.6-5.1-4.5 6.8-.6L12 2.5z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ama W.',
      role: 'Google review',
      text: 'A great spot in Kandy — the Buddha bowl was fresh and colorful, exactly what I wanted after a long walk.',
    },
    {
      id: 2,
      name: 'Praveen S.',
      role: 'Kandy local',
      text: 'Cheese kottu that hits the spot every time. Cozy room, friendly team, and food that feels made with care.',
    },
    {
      id: 3,
      name: 'Hiran J.',
      role: 'Traveler',
      text: 'Mojitos and burgers were excellent portions. Easy recommendation for anyone staying in the hills.',
    },
  ];

  return (
    <section className="testimonials" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <header className="testimonials__head reveal">
          <p className="section-eyebrow">Experience</p>
          <h2 id="reviews-heading" className="section-title">
            What our customers <em>say</em>
          </h2>
          <p className="section-lead">
            Honest words from travelers and locals — consistency, warmth, and plates worth repeating.
          </p>
        </header>

        <ul className="testimonials__grid">
          {reviews.map((rev) => (
            <li key={rev.id} className="testimonial reveal">
              <StarRow />
              <blockquote className="testimonial__quote">
                <p>{rev.text}</p>
              </blockquote>
              <footer className="testimonial__footer">
                <div className="testimonial__avatar" aria-hidden="true">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial__name">{rev.name}</p>
                  <p className="testimonial__role">Verified guest · {rev.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
