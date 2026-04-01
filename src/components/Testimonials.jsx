import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: 'Ama Wilson', text: '“Such a great spot in Kandy! The Buddha Bowl was fresh and colorful – exactly what I was looking for.”', rating: 5, date: 'Verified Guest' },
    { id: 2, name: 'Praveen Silva', text: '“Best Cheese Kottu in town, hands down! The atmosphere is cozy and the service is excellent.”', rating: 5, date: 'Verified Local' },
    { id: 3, name: 'Hiran Jay', text: '“Amazing Mojitos and the burgers are massive. Highly recommend for any traveler in Kandy.”', rating: 5, date: 'Verified Traveler' },
  ];

  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        <div className="section-head reveal">
          <span>Guest Stories</span>
          <h2>The Heart <span>of our Service</span></h2>
        </div>
        
        <div className="testimonial-slider">
          {reviews.map((rev) => (
            <div key={rev.id} className="testimonial-card reveal">
              <div className="rating">
                {Array(rev.rating).fill().map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text">{rev.text}</p>
              <div className="author">
                <div className="avatar">
                  {rev.name.charAt(0)}
                </div>
                <div className="meta">
                  <span className="name">{rev.name}</span>
                  <span className="guest-type">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
