import React from 'react';
import './TravelerFavorites.css';

const IMG = {
  bowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  kottu: 'https://images.unsplash.com/photo-1589302168068-964664d93a0d?auto=format&fit=crop&w=900&q=80',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
  tea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80',
};

const TravelerFavorites = () => {
  const items = [
    {
      id: 1,
      name: 'Signature Buddha bowl',
      desc: 'Greens, grains, and bright dressings — fuel for long walks in Kandy.',
      price: '1,200',
      img: IMG.bowl,
      accent: 'var(--forest-2)',
    },
    {
      id: 2,
      name: 'Cheese chicken kottu',
      desc: 'Crisp edges, bold spice — the plate guests talk about first.',
      price: '1,500',
      img: IMG.kottu,
      accent: 'var(--gold-deep)',
    },
    {
      id: 3,
      name: 'Gourmet burger',
      desc: 'Juicy, stacked, and built for appetite after a day in the hills.',
      price: '1,300',
      img: IMG.burger,
      accent: 'var(--terracotta)',
    },
    {
      id: 4,
      name: 'Bubble tea · mojitos',
      desc: 'Cool, playful sips — perfect with sunset on the terrace.',
      price: '600',
      img: IMG.tea,
      accent: 'var(--forest)',
    },
  ];

  return (
    <section className="favorites" id="menu" aria-labelledby="favorites-heading">
      <div className="container">
        <header className="favorites__head reveal">
          <p className="section-eyebrow">Popular now</p>
          <h2 id="favorites-heading" className="section-title">
            Traveler <em>favorites</em>
          </h2>
          <p className="section-lead">
            A snapshot of what regulars and visitors order again and again — full menu in house with daily specials.
          </p>
        </header>

        <ul className="favorites__grid">
          {items.map((item) => (
            <li key={item.id} className="fav-card reveal">
              <div className="fav-card__media">
                <img
                  src={item.img}
                  alt={`${item.name} — Seema Café Kandy`}
                  className="fav-card__img"
                  width={400}
                  height={280}
                  loading="lazy"
                />
                <span className="fav-card__dot" style={{ background: item.accent }} aria-hidden="true" />
              </div>
              <div className="fav-card__body">
                <h3 className="fav-card__title">{item.name}</h3>
                <p className="fav-card__desc">{item.desc}</p>
                <p className="fav-card__price">
                  LKR <span>{item.price}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="favorites__cta reveal">
          <a className="btn btn-primary" href="#curated">
            View curated selections
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelerFavorites;
