import React from 'react';
import { motion } from 'framer-motion';
import './CuratedSelections.css';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  hoverScale,
  viewportSettings
} from './animations';

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
        <motion.header
          className="curated__head"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUpVariants}
        >
          <p className="section-eyebrow">Our specialty</p>
          <h2 id="curated-heading" className="section-title">
            Curated <em>selections</em>
          </h2>
          <p className="section-lead">
            Three moods — morning clarity, evening comfort, and drinks that feel like a reward. Ask staff for what&apos;s in season.
          </p>
        </motion.header>

        <motion.div
          className="curated__mosaic"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          {blocks.map((b) => (
            <motion.div
              key={b.id}
              className={`mosaic-item mosaic-item--${b.id}`}
              variants={staggerItemVariants}
              whileHover={hoverScale}
            >
              <div className="mosaic-item__media">
                <span className="mosaic-item__mood">{b.mood}</span>
                <motion.img
                  src={b.img}
                  alt={`${b.title} — Seema Café`}
                  className="mosaic-item__img"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CuratedSelections;
