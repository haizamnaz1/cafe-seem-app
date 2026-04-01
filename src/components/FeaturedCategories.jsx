import React from 'react';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const categories = [
    { id: 1, name: 'Buddha Bowls', description: 'Fresh, vibrant, and packed with healthly energy.', icon: '🥗', color: '#065F46' },
    { id: 2, name: 'Cheese Kottu', description: 'The legendary Sri Lankan favorite, perfected.', icon: '🥘', color: '#D97706' },
    { id: 3, name: 'Juicy Burgers', description: 'Gourmet blends, perfectly grilled for your soul.', icon: '🍔', color: '#F87171' },
    { id: 4, name: 'Refreshments', description: 'Signature Mojitos & trendy Bubble Teas.', icon: '🍹', color: '#60A5FA' },
  ];

  return (
    <section className="featured-categories" id="menu">
      <div className="container">
        <div className="section-head reveal">
          <span>Curated Selection</span>
          <h2>The Heart <span>Of Flavor</span></h2>
          <p>Our menu is a careful balance of Kandy tradition and modern healthy living.</p>
        </div>
        
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card reveal" style={{ '--accent-color': cat.color }}>
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <button className="card-btn">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
