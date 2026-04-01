import React from 'react';
import './MenuGrid.css';

const MenuGrid = () => {
  const items = [
    { id: 1, name: 'Signature Buddha Bowl', price: '1,200', tag: 'Healthy', type: 'Vegan', color: '#065F46' },
    { id: 2, name: 'Cheese Chicken Kottu', price: '1,500', tag: 'Famous', type: 'Halal', color: '#D97706' },
    { id: 3, name: 'Classic Gourmet Burger', price: '1,300', tag: 'New', type: 'Premium', color: '#F87171' },
    { id: 4, name: 'Signature Bubble Tea', price: '600', tag: 'Refresh', type: 'Thai Milk', color: '#60A5FA' },
  ];

  return (
    <section className="menu-grid">
      <div className="container">
        <div className="section-head reveal">
          <span>Seema Essentials</span>
          <h2>Guest Favorites</h2>
        </div>
        
        <div className="food-grid">
          {items.map((item) => (
            <div key={item.id} className="food-card reveal">
              <div className="food-img-container">
                <div className="food-placeholder" style={{ '--tag-color': item.color }}>
                  <span>{item.tag}</span>
                </div>
              </div>
              <div className="food-info">
                <div className="food-meta">
                  <span className="food-type">{item.type}</span>
                  <span className="food-price">LKR {item.price}</span>
                </div>
                <h3>{item.name}</h3>
                <button className="add-to-cart">Add to Order</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-full-menu">
          <button className="btn btn-primary">View Full Interactive Menu</button>
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
