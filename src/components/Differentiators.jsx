import React from 'react';
import './Differentiators.css';

const IconShield = () => (
  <svg className="diff__icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3l7 3v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconRibbon = () => (
  <svg className="diff__icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5h16v5a4 4 0 01-4 4h-1l-3 5-3-5H8a4 4 0 01-4-4V5z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 9h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconLeaf = () => (
  <svg className="diff__icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 20c6 0 10-5 10-12 0 0-4 2-8 2-5 0-8-2-8-2 0 7 2 12 6 12z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M10 14c2 2 5 3 8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconClock = () => (
  <svg className="diff__icon-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Differentiators = () => {
  const items = [
    {
      title: 'High hygiene standards',
      text: 'Disciplined kitchen routines and visible care — so every plate feels safe and confident.',
      Icon: IconShield,
    },
    {
      title: 'Halal friendly',
      text: 'Thoughtful sourcing and preparation so more guests can dine with peace of mind.',
      Icon: IconRibbon,
    },
    {
      title: 'Vegan & vegetarian',
      text: 'Plant-forward bowls and meat-free favorites that are never an afterthought.',
      Icon: IconLeaf,
    },
    {
      title: 'Since 2019',
      text: 'A steady rhythm of improvement — the same welcome, refined year after year.',
      Icon: IconClock,
    },
  ];

  return (
    <section className="differentiators" aria-labelledby="diff-heading">
      <div className="container">
        <header className="differentiators__head reveal">
          <h2 id="diff-heading" className="section-title">
            We&apos;re <em>different</em> by design
          </h2>
          <p className="section-lead">
            Not louder — simply clearer about what matters: clean food, inclusive menus, and hospitality that remembers your name.
          </p>
        </header>

        <ul className="differentiators__grid">
          {items.map((item) => {
            const Icon = item.Icon;
            return (
              <li key={item.title} className="diff-card reveal">
                <div className="diff-card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="diff-card__title">{item.title}</h3>
                <p className="diff-card__text">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Differentiators;
