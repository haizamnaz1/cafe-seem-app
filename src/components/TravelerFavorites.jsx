import React from 'react';
import './TravelerFavorites.css';

const IMG = {
  bowl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&h=1000&q=80',
  kottu: 'https://images.unsplash.com/photo-1589302168068-964664d93a0d?auto=format&fit=crop&w=700&h=1000&q=80',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&h=1000&q=80',
  tea: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&h=1000&q=80',
  toast: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&h=1000&q=80',
  pasta: 'https://images.unsplash.com/photo-1563379091339-0bfb1c7640c7?auto=format&fit=crop&w=700&h=1000&q=80',
  dessert: 'https://images.unsplash.com/photo-1551024845-8535a9123001?auto=format&fit=crop&w=700&h=1000&q=80',
  coffee: 'https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&w=700&h=1000&q=80',
};

const TravelerFavorites = () => {
  const items = [
    {
      id: 1,
      name: 'Buddha bowl',
      desc: 'Greens, grains, and bright dressings — fuel for walks.',
      price: '1,200',
      img: IMG.bowl,
      accent: 'var(--forest-2)',
      tag: 'Vegan',
    },
    {
      id: 2,
      name: 'Chicken kottu',
      desc: 'Local favorite with a spicy signature kick.',
      price: '1,500',
      img: IMG.kottu,
      accent: 'var(--gold-deep)',
      tag: 'Spicy',
    },
    {
      id: 3,
      name: 'Beef burger',
      desc: 'Juicy, stacked, and built for mountain appetite.',
      price: '1,300',
      img: IMG.burger,
      accent: 'var(--terracotta)',
      tag: 'Popular',
    },
    {
      id: 4,
      name: 'Avocado Toast',
      desc: 'Sourdough with local honey and whipped feta.',
      price: '950',
      img: IMG.toast,
      accent: 'var(--forest-2)',
      tag: 'Fresh',
    },
    {
      id: 5,
      name: 'Seafood Pasta',
      desc: 'Handmade pasta and fresh catch from the coast.',
      price: '1,800',
      img: IMG.pasta,
      accent: 'var(--gold-deep)',
      tag: 'Premium',
    },
    {
      id: 6,
      name: 'Signature Tea',
      desc: 'Cool, playful sips — perfect for sunset vibes.',
      price: '600',
      img: IMG.tea,
      accent: 'var(--forest)',
      tag: 'Refreshing',
    },
    {
      id: 7,
      name: 'Choc Mousse',
      desc: 'Dark chocolate with local Kandy coffee hint.',
      price: '750',
      img: IMG.dessert,
      accent: 'var(--terracotta)',
      tag: 'Sweet',
    },
    {
      id: 8,
      name: 'The Affogato',
      desc: 'Espresso over artisan vanilla bean gelato.',
      price: '550',
      img: IMG.coffee,
      accent: 'var(--forest-deep)',
      tag: 'Coffee',
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

        <div className="favorites__grid">
          {items.map((item) => (
            <div key={item.id} className="fav-card reveal">
              <div className="fav-card__media">
                <img
                  src={item.img}
                  alt={`${item.name} — Seema Café Kandy`}
                  className="fav-card__img"
                  loading="lazy"
                />
                <div className="fav-card__overlay">
                  {item.tag && <span className="fav-card__tag" style={{ background: item.accent }}>{item.tag}</span>}
                  <p className="fav-card__price">
                    LKR <span>{item.price}</span>
                  </p>
                </div>
              </div>
              <div className="fav-card__body">
                <h3 className="fav-card__title">{item.name}</h3>
                <p className="fav-card__desc">{item.desc}</p>
                <div className="fav-card__footer">
                   <button className="fav-card__action" aria-label={`View details for ${item.name}`}>
                     Details 
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="favorites__cta reveal">
          <a className="btn btn-primary" href="#menu-full">
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelerFavorites;



