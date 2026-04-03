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
      id: 'morning',
      mood: 'Morning',
      title: 'Healthy starts',
      items: ['Buddha bowls', 'Protein toasts', 'Fresh juices', 'Light bowls for travel days'],
      img: BG.healthy,
    },
    {
      id: 'evening',
      mood: 'Evening',
      title: 'Dinner specials',
      items: ['Cheese kottu', 'Kebuli rice', 'Gourmet burgers', 'Hearty plates for cool nights'],
      img: BG.dinner,
    },
    {
      id: 'drinks',
      mood: 'Drinks',
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

        <div className="curated__mosaic">
          {blocks.map((b) => (
            <div key={b.id} className={`mosaic-item mosaic-item--${b.id} reveal`}>
              <div className="mosaic-item__media">
                <img
                  src={b.img}
                  alt={`${b.title} — Seema Café`}
                  className="mosaic-item__img"
                  loading="lazy"
                />
              </div>
              <div className="mosaic-item__glass">
                <h3 className="mosaic-item__title">{b.title}</h3>
                <ul className="mosaic-item__list">
                  {b.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedSelections;
