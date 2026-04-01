import React from 'react';
import './CuratedSelections.css';

const BG = {
  healthy:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80',
  dinner:
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
  drinks:
    'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=80',
};

const CuratedSelections = () => {
  const blocks = [
    {
      title: 'Healthy starts',
      items: ['Buddha bowls', 'Protein toasts', 'Fresh juices', 'Light bowls for travel days'],
      img: BG.healthy,
    },
    {
      title: 'Dinner specials',
      items: ['Cheese kottu', 'Kebuli rice', 'Gourmet burgers', 'Hearty plates for cool nights'],
      img: BG.dinner,
    },
    {
      title: 'Refreshments',
      items: ['Mojitos', 'Bubble tea', 'Premium coffee', 'Chilled classics for the terrace'],
      img: BG.drinks,
    },
  ];

  return (
    <section className="curated" id="curated" aria-labelledby="curated-heading">
      <div className="container">
        <header className="curated__head reveal">
          <p className="section-eyebrow">Our specialty</p>
          <h2 id="curated-heading" className="section-title">
            Curated <em>selections</em>
          </h2>
          <p className="section-lead">
            Three moods — morning clarity, evening comfort, and drinks that feel like a reward. Ask staff for what&apos;s in season.
          </p>
        </header>

        <ul className="curated__grid">
          {blocks.map((b) => (
            <li key={b.title} className="curated-card reveal">
              <div className="curated-card__media">
                <img
                  src={b.img}
                  alt={`${b.title} — mood and dishes at Seema Café`}
                  className="curated-card__img"
                  width={600}
                  height={420}
                  loading="lazy"
                />
                <div className="curated-card__overlay" />
                <h3 className="curated-card__title">{b.title}</h3>
              </div>
              <ul className="curated-card__list">
                {b.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CuratedSelections;
